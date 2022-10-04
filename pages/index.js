import { useState, useRef, useCallback, useEffect } from 'react'

import BookCard from '../components/BookCard'
import styles from '../styles/Home.module.scss'
import BookLiast from '../components/BookLiast'

import { useAppContext } from '../context/AppContext'

export const getServerSideProps = async () => {
  const response = await fetch(`https://gutendex.com/books`)
  const data = await response.json()
  let booksList = data
  return {
    props: { booksList },
  }
}

const Home = ({ booksList }) => {
  const { results, next } = booksList
  const [list, setList] = useState(results)
  const [visible, setVisible] = useState(false)
  const [nexPage, setNexPage] = useState(next)

  const [appState, setAppState] = useAppContext()
  const observer = useRef()
  const { listdata, currentPage, hasMore, loading } = BookLiast(
    nexPage,
    visible
  )

  const lastBook = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setNexPage(currentPage)
          setVisible(true)
          setList((prev) => [...prev, ...listdata])
        }
      })

      if (node) observer.current.observe(node)
    },
    [hasMore, loading]
  )

  const fatchdata = async () => {
    const response = await fetch(
      `https://gutendex.com/books?languages=${appState}`
    )
    const data = await response.json()

    setList(data.results)
    setNexPage(data.next)
  }

  useEffect(() => {
    if (appState !== undefined) {
      fatchdata()
    }
  }, [appState])

  return (
    <>
      <div className={styles.container} id="scrollableDiv">
        {booksList &&
          list.map((item, index) => {
            if (list.length === index + 1) {
              return (
                <div ref={lastBook}>
                  <BookCard item={item} key={item.id} />
                </div>
              )
            } else {
              return <BookCard item={item} />
            }
          })}
      </div>
    </>
  )
}

export default Home

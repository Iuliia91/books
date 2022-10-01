import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import styles from '../styles/Home.module.scss'

export const getStaticProps = async () => {
  const response = await fetch('https://gutendex.com/books')
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { booksList: data },
  }
}

const dinamicPagination = async (number) => {
  const response = await fetch(`https://gutendex.com/books/?page=${number}`)
  const data = await response.json()

  return data
}

const Home = ({ booksList }) => {
  const { results, next } = booksList
  const [currentPage, setCurrentPage] = useState(1)
  const [list, setList] = useState(results)
  const [fetching, setFetching] = useState(false)
  console.log(results)

  useEffect(() => {
    dinamicPagination(currentPage).then((response) => {
      setCurrentPage((prev) => prev + 1)
      setList([...list, ...response.results])
    })
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) ===
      0
    ) {
      setFetching(true)
    }
  }

  return (
    <div className={styles.container}>
      {booksList &&
        list.map((item) => {
          return <BookCard item={item} />
        })}
    </div>
  )
}

export default Home

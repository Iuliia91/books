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

const Home = ({ booksList }) => {
  const { results } = booksList

  return (
    <div className={styles.container}>
      {booksList &&
        results.map((item) => {
          return <BookCard item={item} />
        })}
    </div>
  )
}

export default Home

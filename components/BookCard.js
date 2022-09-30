import styles from '../styles/BookCard.module.scss'
import Link from 'next/link'
const authorName = (author) => {
  return author.map((item) => {
    return <p>{item.name}</p>
  })
}

const BookCard = (props) => {
  const { id, title, formats, authors, download_count } = props.item

  return (
    <Link href={`/${id}`}>
      <div className={styles.card}>
        <figure>
          <img src={formats['image/jpeg']} alt="book" />
        </figure>
        <h2>{title}</h2>
        <h5>
          authors: <span>{authorName(authors)}</span>
        </h5>

        <p>
          download: <span>{download_count}</span>
        </p>
      </div>
    </Link>
  )
}

export default BookCard

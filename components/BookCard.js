import styles from '../styles/BookCard.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export const authorName = (author) => {
  return author.map((item) => {
    return <span>{item.name}</span>
  })
}

const BookCard = (props) => {
  const { id, title, formats, authors, download_count } = props.item
  const [press, setPress] = useState(false)

  return (
    <Link href={`/${id}`}>
      <div
        className={press ? `${styles.card} active` : styles.card}
        onClick={() => setPress(true)}
      >
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

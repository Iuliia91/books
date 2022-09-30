import styles from '../styles/BookCard.module.scss'

const authorName = (author) => {
  return author.map((item) => {
    return <h6>{item.name}</h6>
  })
}

const BookCard = (props) => {
  const { id, title, formats, authors, download_count } = props.item

  return (
    <div className={styles.card}>
      <figure>
        <img src={formats['image/jpeg']} alt="book" />
      </figure>
      <h2>{title}</h2>
      <h5>authors:{authorName(authors)}</h5>

      <p>
        download: <span>{download_count}</span>
      </p>
    </div>
  )
}

export default BookCard

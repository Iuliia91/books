import { authorName } from './BookCard'

const BookInfo = ({ item }) => {
  const { id, title, formats, authors, download_count, subjects } = item || {}

  if (!item) {
    return <h1>No information</h1>
  }
  return (
    <section>
      <figure>
        <img src={formats['image/jpeg']} alt="book" />
      </figure>
      <h1>{title}</h1>
      <h5>
        authors: <span>{authorName(authors)}</span>
      </h5>
    </section>
  )
}

export default BookInfo

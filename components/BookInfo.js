const BookInfo = ({ item }) => {
  const { id, title, formats, authors, download_count, subjects } = item || {}

  if (!item) {
    return <h1>No information</h1>
  }
  return <h1>Hello World</h1>
}

export default BookInfo

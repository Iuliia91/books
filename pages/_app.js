import '../styles/globals.scss'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-column">
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

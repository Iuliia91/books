import '../styles/globals.scss'
import Header from '../components/Header'
import AppWraper from '../context/AppContext'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="description" content="search and read books" />
      </Head>
      <AppWraper>
        <Header />
        <Component {...pageProps} />
      </AppWraper>
    </div>
  )
}

export default MyApp

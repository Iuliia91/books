import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header'
import AppWraper from '../context/AppContext'

/*<Head>
        <title>Book search</title>
        <meta
          name="description"
          content="search and read books. You can find everithyng"
        />
      </Head>*/
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AppWraper>
        <Header />
        <Component {...pageProps} />
      </AppWraper>
    </div>
  )
}

export default MyApp

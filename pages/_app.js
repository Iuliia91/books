import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header'
import AppWraper from '../context/AppContext'
import { Html } from 'next/document'
function MyApp({ Component, pageProps }) {
  return (
    <Html lang="en">
      <Head>
        <title>Book search</title>
        <meta
          name="description"
          content="search and read books. You can find everithyng"
        />
      </Head>
      <AppWraper>
        <Header />
        <Component {...pageProps} />
      </AppWraper>
    </Html>
  )
}

export default MyApp

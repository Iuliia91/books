import '../styles/globals.scss'
import Header from '../components/Header'

import { getStorage } from 'next-persist'
import { Provider } from 'react-redux'

/*const npConfig = {
  method: 'localStorage',
}*/

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

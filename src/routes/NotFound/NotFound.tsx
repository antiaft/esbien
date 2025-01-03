import { FormattedMessage } from 'react-intl'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'

import hand from '@static/images/hand.png'
import './NotFound.css'

const NotFound = () => {
  return (
    <div id="not-found" className="page">
      <Header />
      <div className="container">
        <h1>
          <img src={hand} alt="es bien logo" />
          <strong>404</strong>
          <span>
            <FormattedMessage id="not-found" />
          </span>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound

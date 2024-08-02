import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { FormattedMessage } from '../../components/Intl/FormattedMessage'
import './NotFound.css'

const NotFound = () => {
  return (
    <div id="not-found" className="page">
      <Header />
      <div className="container">
        <h1>
          <strong>404</strong>
          <span><FormattedMessage id="not-found" /></span>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound

import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'

import error from '@static/images/bulb.png'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div id="not-found" className="page">
      <Header />
      <div className="container">
        <h1>
          <img src={error} alt="es bien logo" />
          <strong>Error</strong>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './NotFound.css'

const NotFound = () => {
  return (
    <div id="not-found" className="page">
      <Header />
      <div className="container">
        <h1>
          <strong>404</strong>
          <span>No encontrado</span>
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound

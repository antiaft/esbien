import Header from '../../components/Header/Header'
import './Home.css'

const Home = () => {
  return (
    <div id="home" className="page">
      <Header />
      <div className="container">
        <div className="side-left">
          <h1>Cuenta lo que quieras, pero cuéntalo bien.</h1>
          <p>Convertimos textos aburridamente ordinarios en historias humanamente extraordinarias.</p>
        </div>
      </div>
    </div>
  )
}

export default Home

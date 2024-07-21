import Header from '../../components/Header/Header'
import { DotLottiePlayer } from '@dotlottie/react-player'
import '@dotlottie/react-player/dist/index.css'
import Footer from '../../components/Footer/Footer'
import MailtoButton from '../../components/MailtoButton/MailtoButton'

import anti from '/images/anti.jpeg'
import mari from '/images/mari.jpeg'

import './Home.css'

const Home = () => {
  return (
    <div id="home" className="page">
      <Header />
      <section id="intro" className="container split-container">
        <div className="split-side side-left">
          <div className="wrapper">
            <h1>Cuenta lo que quieras, pero cuéntalo bien.</h1>
            <p>Convertimos textos aburridamente ordinarios en historias humanamente extraordinarias.</p>
            <MailtoButton email="destinatario@example.com">
              ¿Hablamos?
            </MailtoButton>
          </div>
        </div>
        <div className="split-side side-right">
        <DotLottiePlayer src="/lotties/think.lottie" autoplay loop />
        </div>
      </section>
      <section id="parallax-section">
        <h1>Tu historia es buena, contarla ES BIEN.</h1>
      </section>
      <section id="hello" className="container split-container">
        <div className="split-side side-left">
          <DotLottiePlayer src="/lotties/about.lottie" autoplay loop />
        </div>
        <div className="split-side side-right">
          <div className="wrapper">
            <h1>Hola, somos es bien.</h1>
            <p>Amigas desde los 15, rodeadas de libros desde los 3.</p>
            <p>Una es zurda, la otra diestra. Una tiene estilo, la otra imaginación /Una es estilosa, la otra imaginativa/Una sueña mucho, la otra lo aterriza todo. Una crea mucho, la otra crea más.</p>
            <p>Y así, entre las dos, tenemos una personalidad estupenda. Si nos cuentas tu historia, la haremos más fascinante.</p>
            <p>¿No sabes por donde empezar? Pues...</p>
            <a href="/#intro">¡Aquí es!</a>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="container">
          <article className="about-card">
            <section className="about-card-image">
              <img src={mari} alt="" />
            </section>
            <section className="about-card-data">
              <h2>María Mediero</h2>
              <h3>Compromiso y corrección lingüística</h3>
              <p>Tras 10 años como traductora y editora dando voz a otros, ahora te da voz a ti. Especialista en redacción social, síntesis de ideas, storytelling ético, comunicación con impacto, procesamiento del lenguaje natural y peces/Galicia/insectos.</p>
              <p>No para hasta encontrar la palabra precisa para el contexto perfecto.</p>
              <p>El último test que ha hecho dice que es creativa, didáctica y emocional. Ah, es la zurda de las dos.</p>
            </section>
          </article>

          <article className="about-card">
          <section className="about-card-image">
              <img src={anti} alt="" />
            </section>
            <section className="about-card-data">
              <h2>Antía F. Tejo</h2>
              <h3>Empatía y estrategia comunicativa</h3>
              <p>Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme. </p>
              <p>Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme. </p>
            </section>
          </article>

        </div>
      </section>
      <section id="newsletter">
        <div className="container">
          <h1>Suscribirte a nuestra newsletter, es bien.</h1>
          <MailtoButton email="destinatario@example.com" subject="Newsletter" body="Quiero suscribirme a vuestra newsletter">
            Enviádmela, porfa
          </MailtoButton>
        </div>
      </section>
      <Footer companyName='Es bien.' />
    </div>
  )
}

export default Home

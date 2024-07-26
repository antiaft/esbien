import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Hello from './Sections/Hello/Hello'
import WhatWeDo from './Sections/WhatWeDo/WhatWeDo'
import About from './Sections/About/About'
import Intro from './Sections/Intro/Intro'

import '@dotlottie/react-player/dist/index.css'
import './Home.css'

const Home = () => {
  return (
    <div id="home" className="page">
      <Header />
      <Intro />
      <section id="parallax-section">
        <h1>Tu historia es buena, contarla ES BIEN.</h1>
      </section>
      <WhatWeDo />
      <Hello />
      <About />
      <Footer companyName='Es bien.' />
    </div>
  )
}

export default Home

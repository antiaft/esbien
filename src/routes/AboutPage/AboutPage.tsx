import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import About from '@routes/Home/Sections/About/About'

import './AboutPage.css'
import BannerService from '@routes/Services/Sections/BannerService/BannerService'

const AboutPage = () => {
  return (
    <div id="about-page" className="page">
      <Header />
      <BannerService service={'about'} />
      <About />
      <Footer />
    </div>
  )
}

export default AboutPage

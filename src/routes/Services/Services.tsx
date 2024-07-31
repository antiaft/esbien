import Creation from './Sections/Creation/Creation'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Writing from './Sections/Writing/Writing'
import Consulting from './Sections/Consulting/Consulting'
import Editing from './Sections/Editing/Editing'

import './Services.css'

const Services = () => {
  return (
    <div id="services" className="page">
      <Header />
      <Creation />
      <Writing />
      <Consulting />
      <Editing />
      <Footer />
    </div>
  )
}

export default Services

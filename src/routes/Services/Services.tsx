import { Outlet } from 'react-router'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

import './Services.css'

const Services = () => {
  return (
    <div id="services" className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Services

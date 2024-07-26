import Nav from '../Nav/Nav'
import { Link } from 'react-router-dom'

import logo from '/images/logo.png'
import './Menu.css'

export default function Menu() {
  return (
    <ul id="menu">
      <Link to="/">
        <img src={logo} alt="es bien logo" />
      </Link>
      <Nav />
    </ul>
  )
}

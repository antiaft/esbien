import Nav from '../Nav/Nav'
import { Link } from 'react-router'

import logo from '@static/images/logo.png'
import './Menu.css'

export default function Menu() {
  return (
    <menu id="menu" className="container">
      <Link to="/">
        <img src={logo} alt="es bien logo" />
      </Link>
      <Nav />
    </menu>
  )
}

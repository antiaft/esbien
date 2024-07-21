import Nav from '../Nav/Nav'

import logo from '/images/logo.png'
import './Menu.css'

export default function Menu() {
  return (
    <ul id="menu">
      <img src={logo} alt="" />
      <Nav />
    </ul>
  )
}

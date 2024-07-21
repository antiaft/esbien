import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav id="navbar" className={`${openMenu ? 'open-menu' : ''}`}>
      <ul className="menu-panel">
        <li>
          <Link to="/#creation">
            <span>Creación</span>
          </Link>
        </li>
        <li>
          <Link to="/#creation">
            <span>Redacción</span>
          </Link>
        </li>
      </ul>
      <ul className="only-responsive">
        <li>
          <span
            className={`icon icon-${openMenu ? 'close' : 'menu'}`}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </li>
      </ul>
    </nav>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'
import MailtoButton from '../MailtoButton/MailtoButton'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav id="navbar" className={`${openMenu ? 'open-menu' : ''}`}>
      <ul className="menu-panel">
        <li>
          <Link className="nav-link" to="/#creation">
            <span>Creación</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#creation">
            <span>Redacción</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#about-us">
            <span>Corrección</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#about-us">
            <span>Consultoría</span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#about-us">
            <span>Nosotras</span>
          </Link>
        </li>
        <li>
          <MailtoButton email="destinatario@example.com">
            ¿Hablamos?
          </MailtoButton>
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

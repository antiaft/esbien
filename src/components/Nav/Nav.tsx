import { useState } from 'react'
import { Link } from 'react-router-dom'
import MailtoButton from '../MailtoButton/MailtoButton'
import { FormattedMessage } from '../Intl/FormattedMessage'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

import './Nav.css'

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav id="navbar" className={`${openMenu ? 'open-menu' : ''}`}>
      <ul className="menu-panel">
        <li>
          <Link className="nav-link" to="/services/#creation">
            <span>
              <FormattedMessage id="creation" />
            </span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/services/#writing">
            <span>
              <FormattedMessage id="writing" />
            </span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/services/#consulting">
            <span>
              <FormattedMessage id="consulting" />
            </span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/services/#editing">
            <span>
              <FormattedMessage id="editing" />
            </span>
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/#hello">
            <span>
              <FormattedMessage id="about-us" />
            </span>
          </Link>
        </li>
        <li>
          <MailtoButton email="destinatario@example.com">
            <FormattedMessage id="talk" />
          </MailtoButton>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
      <ul className="only-responsive">
        <li>
          <i onClick={() => setOpenMenu(!openMenu)} className="material-icons">{openMenu ? 'close' : 'menu'}</i>
        </li>
      </ul>
    </nav>
  )
}

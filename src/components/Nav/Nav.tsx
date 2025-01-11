import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router'
import SelectLanguage from '@components/SelectLanguage/SelectLanguage'
import DialogButton from '@components/DialogButton/DialogButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import './Nav.css'

const navItems = [
  { path: '/services/creation', id: 'creation' },
  { path: '/services/writing', id: 'writing' },
  { path: '/services/consulting', id: 'consulting' },
  { path: '/services/editing', id: 'editing' },
  { path: '/about-us', id: 'about-us' }
]

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav id="navbar" className={`${openMenu ? 'open-menu' : ''}`}>
      <ul className="menu-panel">
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active-link' : ''}`
              }
            >
              <span>
                <FormattedMessage id={item.id} />
              </span>
            </NavLink>
          </li>
        ))}
        <li>
          <DialogButton />
        </li>
        <li>
          <SelectLanguage />
        </li>
      </ul>
      <ul className="only-responsive">
        <li onClick={() => setOpenMenu(!openMenu)}>
          <FontAwesomeIcon icon={openMenu ? faTimesCircle : faBars} />
        </li>
      </ul>
    </nav>
  )
}

import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'
import SocialLinks from '@components/SocialLinks/SocialLinks'

import hand from '@static/images/hand.png'
import './Footer.css'

interface FooterProps {
  companyName?: string
}

const Footer = ({ companyName = 'EsBien.' }: FooterProps) => {
  return (
    <footer id="colophon">
      <div className="container">
        <nav>
          <Link to="/legal">
            <FormattedMessage id="legal" />
          </Link>
          <Link to="/privacy">
            <FormattedMessage id="privacy" />
          </Link>
        </nav>
        <p>
          © {new Date().getFullYear()} <strong>{companyName}</strong> -{' '}
          <span>
            <FormattedMessage id="all-right" />
          </span>
        </p>
        <SocialLinks />
        <img src={hand} alt="es bien logo" />
      </div>
    </footer>
  )
}

export default Footer

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

import './SocialLinks.css'

const SocialLinks = () => {
  return (
    <div id="social-links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  )
}

export default SocialLinks

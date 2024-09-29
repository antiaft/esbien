import { Link } from 'react-router-dom';
import { FormattedMessage } from '../Intl/FormattedMessage';
import './Footer.css'

interface FooterProps {
  companyName?: string;
}

const Footer = ({ companyName = 'EsBien.' }: FooterProps) => {
  return (
    <footer id="colophon">
      <nav>
        <Link to="/legal">
          <FormattedMessage id="legal" />
        </Link>
        <Link to="/privacy">
          <FormattedMessage id="privacy" />
        </Link>
      </nav>
      <section id="social-links">
        <a href="/facebook">
          <i className="material-icons">facebook</i>
        </a>
        <a href="/facebook">
          <i className="material-icons">instagram</i>
        </a>
        <a href="/facebook">
          <i className="material-icons">linkedin</i>
        </a>
      </section>
      <p>© {new Date().getFullYear()} <strong>{companyName}</strong> - <span><FormattedMessage id="all-right" /></span></p>
    </footer>
  );
};

export default Footer;

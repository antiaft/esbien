import { Link } from 'react-router-dom';
import { FormattedMessage } from '../Intl/FormattedMessage';
import './Footer.css'

interface FooterProps {
  companyName: string;
}

const Footer = ({ companyName }: FooterProps) => {
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
        <a href="/facebook">facebook</a>
        <a href="/facebook">instagram</a>
        <a href="/facebook">linkedin</a>
      </section>
      <p>© {new Date().getFullYear()} <strong>{companyName}</strong> - <span><FormattedMessage id="all-right" /></span></p>
    </footer>
  );
};

export default Footer;

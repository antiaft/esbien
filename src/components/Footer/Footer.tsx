import './Footer.css'

interface FooterProps {
  companyName: string;
}

const Footer = ({ companyName }: FooterProps) => {
  return (
    <footer id="colophon">
      <p>© {new Date().getFullYear()} {companyName}</p>
    </footer>
  );
};

export default Footer;

import './MailtoButton.css'

interface MailtoButtonProps {
  email: string;
  subject?: string;
  body?: string;
  children: React.ReactNode;
}

const MailtoButton = ({ email, subject = 'Contacto con Esbien', body = 'Hola quiero que contacteis conmigo', children }: MailtoButtonProps) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a className="mailto-button" href={mailtoUrl}>
      {children}
    </a>
  );
};

export default MailtoButton;

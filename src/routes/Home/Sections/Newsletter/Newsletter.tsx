import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './About.css'
import MailtoButton from '../../../../components/MailtoButton/MailtoButton'

const Newsletter = () => {
  return (
    <section id="newsletter">
    <div className="container">
      <h1><FormattedMessage id="newsletter.title" /></h1>
      <MailtoButton email="destinatario@example.com" subject="Newsletter" body="Quiero suscribirme a vuestra newsletter">
        Enviádmela, porfa
      </MailtoButton>
    </div>
  </section>
  )
}

export default Newsletter

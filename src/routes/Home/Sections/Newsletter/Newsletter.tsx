import { FormattedMessage } from 'react-intl'
import MailtoButton from '@components/MailtoButton/MailtoButton'

import './Newsletter.css'

const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="container">
        <h1>
          <FormattedMessage id="newsletter.title" />
        </h1>
        <MailtoButton
          email="destinatario@example.com"
          subject="Newsletter"
          body="Quiero suscribirme a vuestra newsletter"
        >
          Enviádmela, porfa
        </MailtoButton>
      </div>
    </section>
  )
}

export default Newsletter

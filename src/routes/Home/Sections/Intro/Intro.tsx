import { FormattedMessage } from 'react-intl'
import MailtoButton from '@components/MailtoButton/MailtoButton'

import './Intro.css'

const Intro = () => {
  return (
    <section id="intro" className="container split-container">
      <div className="split-side side-left">
        <div className="wrapper">
          <h1>
            <FormattedMessage id="intro.title" />
          </h1>
          <p>
            <FormattedMessage id="intro.text" />
          </p>
          <MailtoButton email="destinatario@example.com">
            <FormattedMessage id="talk" />
          </MailtoButton>
        </div>
      </div>
      <div className="split-side side-right" />
    </section>
  )
}

export default Intro

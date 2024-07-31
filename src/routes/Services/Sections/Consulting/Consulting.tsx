import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './Consulting.css'

const Consulting = () => {
  return (
    <section id="consulting">
      <div className="container">
        <h1>
          <FormattedMessage id="consulting.title" />
        </h1>
        <section className="consulting-grid">
          <article>
            <h2><FormattedMessage id="consulting.company.title" /></h2>
            <p><FormattedMessage id="consulting.company.text-1" /></p>
            <p><FormattedMessage id="consulting.company.text-2" /></p>
            <p><FormattedMessage id="consulting.company.text-3" /></p>
          </article>
          <article>
            <h2><FormattedMessage id="consulting.personal.title" /></h2>
            <p><FormattedMessage id="consulting.personal.text-1" /></p>
            <p><FormattedMessage id="consulting.personal.text-2" /></p>
            <p><FormattedMessage id="consulting.personal.text-3" /></p>
          </article>
          <article>
            <h2><FormattedMessage id="consulting.coherence.title" /></h2>
            <p><FormattedMessage id="consulting.coherence.text-1" /></p>
            <p><FormattedMessage id="consulting.coherence.text-2" /></p>
            <p><FormattedMessage id="consulting.coherence.text-3" /></p>
          </article>
        </section>
      </div>
    </section>
  )
}

export default Consulting

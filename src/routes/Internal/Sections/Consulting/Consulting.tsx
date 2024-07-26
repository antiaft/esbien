import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './Consulting.css'

const Consulting = () => {
  return (
    <section id="consulting">
      <div className="container">
        <h1>
          <FormattedMessage id="consulting.title" />
        </h1>
        <p>
          <FormattedMessage id="consulting.text" />
        </p>
      </div>
    </section>
  )
}

export default Consulting

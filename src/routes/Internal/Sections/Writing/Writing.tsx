import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './Writing.css'

const Writing = () => {
  return (
    <section id="writing">
      <div className="container">
        <h1>
          <FormattedMessage id="writing.title" />
        </h1>
        <p>
          <FormattedMessage id="writing.text" />
        </p>
      </div>
    </section>
  )
}

export default Writing

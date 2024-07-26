import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './Editing.css'

const Editing = () => {
  return (
    <section id="editing">
      <div className="container">
        <h1>
          <FormattedMessage id="editing.title" />
        </h1>
        <p>
          <FormattedMessage id="editing.text" />
        </p>
      </div>
    </section>
  )
}

export default Editing

import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './Creation.css'

const Creation = () => {
  return (
    <section id="creation">
      <div className="container">
        <h1>
          <FormattedMessage id="creation.title" />
        </h1>
        <p>
          <FormattedMessage id="creation.text" />
        </p>

      </div>
    </section>
  )
}

export default Creation

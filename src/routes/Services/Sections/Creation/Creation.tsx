import { FormattedMessage } from 'react-intl'
import './Creation.css'

const Creation = () => {
  return (
    <section id="creation">
      <section id="creation-banner">
        <h1>
          <FormattedMessage id="creation.title" />
        </h1>
        <p className="introduction">
          <FormattedMessage id="creation.text" />
        </p>
      </section>
      <div className="container">
        <section className="split-container">
          <div className="split-side side-left">
            <div className="wrapper">
              <h2>
                <FormattedMessage id="creation.company.title" />
              </h2>
              <p>
                <FormattedMessage id="creation.company.text-1" />
              </p>
              <p>
                <FormattedMessage id="creation.company.text-2" />
              </p>
              <p>
                <FormattedMessage id="creation.company.text-3" />
              </p>
            </div>
          </div>
          <div className="split-side side-right">
            <div className="wrapper">
              <h2>
                <FormattedMessage id="creation.personal.title" />
              </h2>
              <p>
                <FormattedMessage id="creation.personal.text-1" />
              </p>
              <p>
                <FormattedMessage id="creation.personal.text-2" />
              </p>
              <p>
                <FormattedMessage id="creation.personal.text-3" />
              </p>
              <p>
                <FormattedMessage id="creation.personal.text-4" />
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Creation

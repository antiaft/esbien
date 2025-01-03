import { FormattedMessage } from 'react-intl'
import './Editing.css'

const Editing = () => {
  return (
    <section id="editing">
      <div className="container">
        <h1>
          <FormattedMessage id="editing.title" />
        </h1>
        <p className="introduction">
          <FormattedMessage id="editing.text" />
        </p>
        <section className="editing-grid">
          <article>
            <h2>
              <FormattedMessage id="editing.orto.title" />
            </h2>
            <p>
              <FormattedMessage id="editing.orto.text-1" />
            </p>
            <p>
              <FormattedMessage id="editing.orto.text-2" />
            </p>
            <p>
              <FormattedMessage id="editing.orto.text-3" />
            </p>
          </article>
          <article>
            <h2>
              <FormattedMessage id="editing.style.title" />
            </h2>
            <p>
              <FormattedMessage id="editing.style.text-1" />
            </p>
            <p>
              <FormattedMessage id="editing.style.text-2" />
            </p>
          </article>
          <article>
            <h2>
              <FormattedMessage id="editing.deleting.title" />
            </h2>
            <p>
              <FormattedMessage id="editing.deleting.text-1" />
            </p>
            <p>
              <FormattedMessage id="editing.deleting.text-2" />
            </p>
          </article>
          <article>
            <h2>
              <FormattedMessage id="editing.galician.title" />
            </h2>
            <p>
              <FormattedMessage id="editing.galician.text-1" />
            </p>
            <p>
              <FormattedMessage
                id="editing.galician.text-2"
                values={{
                  bold: (
                    <strong>
                      <FormattedMessage id="editing.galician.bold" />
                    </strong>
                  )
                }}
              />
            </p>
          </article>
        </section>
      </div>
    </section>
  )
}

export default Editing

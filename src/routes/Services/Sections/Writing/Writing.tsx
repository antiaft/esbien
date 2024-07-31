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
        <section className="writing-grid">
          <article>
            <h2><FormattedMessage id="writing.storytelling.title" /></h2>
            <p><FormattedMessage id="writing.storytelling.text-1" /></p>
            <p><FormattedMessage id="writing.storytelling.text-2" /></p>
            <p><FormattedMessage id="writing.storytelling.text-3" /></p>
          </article>
          <article>
            <h2><FormattedMessage id="writing.social.title" /></h2>
            <p><FormattedMessage id="writing.social.text-1" /></p>
            <p><FormattedMessage id="writing.social.text-2" /></p>
            <p><FormattedMessage id="writing.social.text-3" /></p>
          </article>
          <article>
            <h2><FormattedMessage id="writing.web.title" /></h2>
            <p><FormattedMessage id="writing.web.text-1" /></p>
            <p><FormattedMessage id="writing.web.text-2" /></p>
            <p><FormattedMessage id="writing.web.text-3" /></p>
          </article>
          <article>
            <h2><FormattedMessage id="writing.book.title" /></h2>
            <p><FormattedMessage id="writing.book.text-1" /></p>
            <p><FormattedMessage id="writing.book.text-2" /></p>
          </article>
        </section>
      </div>
    </section>
  )
}

export default Writing

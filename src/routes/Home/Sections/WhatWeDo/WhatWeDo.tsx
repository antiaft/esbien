import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './WhatWeDo.css'

const WhatWeDo = () => {
  return (
    <section id="what-we-do">
      <h1><FormattedMessage id="what-we-do.title" /></h1>
      <div className="container what-we-do-grid">
        <article className="what-card" id="what-card-narrative">
          <div className="what-card-info">
            <h2><FormattedMessage id="what-card.narrative" /></h2>
            <p><FormattedMessage id="what-card.narrative-1" /></p>
            <p><FormattedMessage id="what-card.narrative-2" /></p>
          </div>
          <a className="button">
            <FormattedMessage id="tell-us" />
          </a>
        </article>
        <article className="what-card" id="what-card-writing">
          <div className="what-card-info">
            <h2><FormattedMessage id="what-card.writing" /></h2>
            <p><FormattedMessage id="what-card.writing-1" /></p>
            <p><FormattedMessage id="what-card.writing-2" /></p>
            <p><FormattedMessage id="what-card.writing-3" /></p>
            <p><FormattedMessage id="what-card.writing-4" /></p>
          </div>
          <a className="button">
            <FormattedMessage id="tell-us" />
          </a>
        </article>
        <article className="what-card" id="what-card-consulting">
          <div className="what-card-info">
            <h2><FormattedMessage id="what-card.consulting" /></h2>
            <p><FormattedMessage id="what-card.consulting-1" /></p>
            <p><FormattedMessage id="what-card.consulting-2" /></p>
            <p><FormattedMessage id="what-card.consulting-3" /></p>
            <p><FormattedMessage id="what-card.consulting-4" /></p>
          </div>
          <a className="button">
            <FormattedMessage id="tell-us" />
          </a>
        </article>

        <article className="what-card" id="what-card-editing">
          <div className="what-card-info">
            <h2><FormattedMessage id="what-card.editing" /></h2>
            <p><FormattedMessage id="what-card.editing-1" /></p>
            <p><FormattedMessage id="what-card.editing-2" /></p>
            <p><FormattedMessage id="what-card.editing-3" /></p>
            <p><FormattedMessage id="what-card.editing-4" /></p>
            <p><FormattedMessage id="what-card.editing-5" /></p>
          </div>
          <a className="button">
            <FormattedMessage id="tell-us" />
          </a>
        </article>
      </div>
    </section>
  )
}

export default WhatWeDo

import { FormattedMessage } from 'react-intl'
import DialogButton from '@components/DialogButton/DialogButton'

import './Intro.css'

const Intro = () => {
  return (
    <section id="intro">
      <div className="container split-container">
        <div className="split-side side-left">
          <div className="wrapper">
            <h1>
              <FormattedMessage id="intro.title" />
            </h1>
            <p>
              <FormattedMessage id="intro.text" />
            </p>
            <DialogButton />
          </div>
        </div>
        <div className="split-side side-right" />
      </div>
    </section>
  )
}

export default Intro

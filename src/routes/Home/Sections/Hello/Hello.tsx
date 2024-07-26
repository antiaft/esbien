import { DotLottiePlayer } from '@dotlottie/react-player'
import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import './Hello.css'

const Hello = () => {
  return (
    <section id="hello" className="container split-container">
    <div className="split-side side-left">
      <DotLottiePlayer src="/lotties/about.lottie" autoplay loop />
    </div>
    <div className="split-side side-right">
      <div className="wrapper">
        <h1><FormattedMessage id="hello.title" /></h1>
        <p><FormattedMessage id="hello.text-1" /></p>
        <p><FormattedMessage id="hello.text-2" /></p>
        <p><FormattedMessage id="hello.text-3" /></p>
        <p><FormattedMessage id="hello.text-4" /></p>
        <p><FormattedMessage id="hello.text-5" /></p>
        <a href="/#intro"><FormattedMessage id="here" /></a>
      </div>
    </div>
  </section>
  )
}

export default Hello

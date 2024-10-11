import { FormattedMessage } from '../../../../components/Intl/FormattedMessage'

import anti from '/images/anti.jpeg'
import mari from '/images/mari.jpeg'
import './About.css'

const About = () => {
  return (
    <section id="about-us">
    <div className="container">
      <article className="about-card">
        <section className="about-card-image">
          <img src={mari} alt="" />
        </section>
        <section className="about-card-data">
          <h2>María Mediero</h2>
          <h3><FormattedMessage id="about-card.mari.title" /></h3>
          <p><FormattedMessage id="about-card.mari.text-1" /></p>
          <p><FormattedMessage id="about-card.mari.text-2" /></p>
          <p><FormattedMessage id="about-card.mari.text-3" /></p>
          <p><FormattedMessage id="about-card.mari.text-4" /></p>
        </section>
      </article>

      <article className="about-card">
        <section className="about-card-image">
          <img src={anti} alt="" />
        </section>
        <section className="about-card-data">
          <h2>Antía F. Tejo</h2>
          <h3><FormattedMessage id="about-card.anti.title" /></h3>
          <p><FormattedMessage id="about-card.anti.text-1" /></p>
          <p><FormattedMessage id="about-card.anti.text-2" /></p>
          <p><FormattedMessage id="about-card.anti.text-3" /></p>
        </section>
      </article>

    </div>
  </section>
  )
}

export default About

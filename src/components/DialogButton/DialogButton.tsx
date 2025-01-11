import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import ContactForm from '@components/ContactForm/ContactForm'

import './DialogButton.css'

const DialogButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="dialog-button" onClick={() => setIsOpen(!isOpen)}>
        <FormattedMessage id="talk" />
      </button>
      <dialog open={isOpen}>
        <FontAwesomeIcon
          onClick={() => setIsOpen(false)}
          icon={faTimesCircle}
        />
        <ContactForm />
      </dialog>
    </>
  )
}

export default DialogButton

import React, { useEffect, useState } from 'react'
import { EMAIL_DISPLAY, emailAddress } from '../seo'
import { trackButtonClick } from '../utils/analytics'

// mailto link whose address is only filled in after hydration, so pre-rendered HTML has no plain address.
// Children default to the obfuscated display text ("name at gmail dot com").
function EmailLink({ source, className, children, ...rest }) {
  const [href, setHref] = useState(undefined)

  useEffect(() => {
    setHref(`mailto:${emailAddress()}`)
  }, [])

  const handleClick = (e) => {
    trackButtonClick('Email Link', source)
    if (!href) {
      e.preventDefault()
      window.location.href = `mailto:${emailAddress()}`
    }
  }

  return (
    <a href={href ?? '#'} className={className} onClick={handleClick} {...rest}>
      {children ?? EMAIL_DISPLAY}
    </a>
  )
}

export default EmailLink

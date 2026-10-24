import React, { useEffect, useRef, useState } from 'react'
import { emailAddress } from '../seo'
import { trackButtonClick } from '../utils/analytics'

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
}

// Secondary contact action: copies the email address and confirms with a toast
function CopyEmailButton({ source, className = '' }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const handleClick = async () => {
    await copyText(emailAddress())
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2200)
    trackButtonClick('Email Copy', source)
  }

  return (
    <>
      <button
        type="button"
        className={`btn btn--ghost btn--m btn--icon ${className}`}
        onClick={handleClick}
        aria-label="Copy email address"
        title="Copy email address"
      >
        {copied ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
      {copied && (
        <div className="toast" role="status"><span className="toast-mark" />Email address copied to clipboard</div>
      )}
    </>
  )
}

export default CopyEmailButton

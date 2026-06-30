import React from 'react'
import './PaperRow.css'

function PaperRow({ index, title, meta, status, href, size = 'lg' }) {
  return (
    <a className={`pr pr--${size}`} href={href} target="_blank" rel="noopener noreferrer">
      {index != null && (
        <span className={`pr-index pr-index--${size}`}>
          {String(index).padStart(2, '0')}
        </span>
      )}
      <div className="pr-body">
        <span className="pr-title">{title}</span>
        {meta && <span className="pr-meta">{meta}</span>}
      </div>
      {status && <span className="pr-status">{status}</span>}
    </a>
  )
}

export default PaperRow

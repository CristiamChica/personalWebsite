import React from 'react'
import { Link } from 'react-router-dom'
import { posts, postPath } from '../../data/posts.js'
import { formatDate } from './format.js'
import './Writing.css'

function Writing() {
  return (
    <div className="wr-page container">
      <header className="wr-header">
        <h1 className="wr-title">Notes and analyses</h1>
        <p className="wr-intro">
          Longer pieces on mathematics, machine learning and data. Each analysis links to the data behind it.
        </p>
      </header>

      <ol className="wr-list">
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={postPath(post)} className="wr-row">
              <span className="wr-row-meta">
                <time dateTime={post.published}>{formatDate(post.published)}</time> · {post.topic}
              </span>
              <span className="wr-row-title">{post.title}</span>
              <span className="wr-row-desc">{post.description}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Writing

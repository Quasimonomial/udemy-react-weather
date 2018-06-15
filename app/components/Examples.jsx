import React from 'react'
import { Link } from 'react-router-dom'

const Examples = () => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <ol>
        <li>
          <Link to="/?location=chicago">Chicago</Link>
        </li>
        <li>
          <Link to="/?location=rio">Rio</Link>
        </li>
        <li>
          <Link to="/?location=madrid">Madrid</Link>
        </li>
      </ol>
    </div>
  )
}

export default Examples;

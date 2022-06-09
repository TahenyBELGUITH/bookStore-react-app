import React from 'react'

export default function Book(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </div>
  )
}

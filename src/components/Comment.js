import React from 'react'

export default function Comment(props) {
  return (
    <>
      {props.comments.map(item => {
        return (
          <>
            <p>{item.username}</p>
            <p>{item.text}</p>
          </>
        )
      })}
      <input type="text" placeholder="comment..." />
    </>
  )
}

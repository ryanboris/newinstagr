import React from 'react'

export default function PostImage(props) {
  return (
    <img
      src={props.imageUrl}
      alt="mainpic"
      style={{
        transform: 'scale(1.1)',
        display: 'block',
        margin: '50px auto'
      }}
    />
  )
}

import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <div className='card-title'><b>{props.name}</b></div>
        <div className='card-description'>{props.description}</div>
    </div>
  )
}

export default Card;



import React from 'react'

export default function Card(props) {
  return (
    <div className="div-card">
      <img src={props.image}></img>
      <p>{props.info}</p>
      <ul>
        <li>{props.i1}</li>
        <li>{props.i2}</li>
        <li>{props.i3}</li>
      </ul>
    </div>
  )
}


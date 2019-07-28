import React from 'react'
import './Card.css'

const Card = props => (
    <a href={props.link}>
    <div className="Card">
        <a href={props.link}/>
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
    </a>
)

export default Card

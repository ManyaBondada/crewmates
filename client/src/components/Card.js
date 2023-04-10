import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <p className="name">{"Name: " + props.name}</p>
          <p className="element">{"Element: " + props.element}</p>
          <p className="companion">{"Companion: " + props.companion}</p>
          <img className="image" alt="avatar" src={props.image} />
      </div>
  );
};

export default Card;
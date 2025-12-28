import React from 'react';
import './Card.css';

const Card = (props) => {
  // Combine the fixed 'card' class with any custom classes passed from the parent
  const classes = 'card ' + props.className;

  return (
    <div className={classes}>{props.children}</div>
  );
}

export default Card;

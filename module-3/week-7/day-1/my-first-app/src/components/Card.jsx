import React from 'react';

export const Card = (props) => {
  return <div>
    <p>Name : {props.name}</p>
  <p>Age in humaine {props.age * 7}</p>
  <img src={props.image} alt={props.name} />
  </div>;
};

export default Card;
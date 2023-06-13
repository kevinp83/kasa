import React from 'react'
import './card.css'
import { hostList } from '../../datas';

const Card = () => {
  return (
    <div className='card-box'>
      {hostList.map((host) => (
        <div className='card' key={host.id} >
          <img src={host.cover} alt={host.title}/>
          <p className='title'>{host.title}</p>
      </div>
      ))}
    </div>
  );
};

export default Card


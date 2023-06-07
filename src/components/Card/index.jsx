import React from 'react'
import './card.css'
import { hostList } from '../../datas';

const Card = () => {
  return (
    <div className='card-box'>
      {hostList.map((host) => (
      <div className='card' key={host.id} style={{ backgroundImage: `url(${host.cover})` }}>
        <div className='title'>{host.title}</div>
      </div>
      ))}
    </div>
  );
};

export default Card


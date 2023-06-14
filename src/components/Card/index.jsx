import React from 'react';
import './card.css';
import { hostList } from '../../datas';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className='card-box'>
      {hostList.map((host) => (
        <div className='card' key={host.id}>
          <Link to={`/logement/${host.id}`}>
          <img src={host.cover} alt={host.title}/>
          <p className='title'>{host.title}</p>
          </Link>
      </div>
      ))}
    </div>
  );
};

export default Card


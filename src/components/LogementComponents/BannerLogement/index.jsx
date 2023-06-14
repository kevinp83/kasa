import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hostList } from '../../../datas';
import './BannerLogement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function BannerLogement(props) {
const { id } = useParams();
  const host = hostList.find((host) => host.id === id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
    prevIndex === host.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? host.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='banner'>
      <img className='banner-img' src={host.pictures[currentImageIndex]} alt='{host.title}'/>
      
      {host.pictures.length > 1 && (
        <>
          <button className="prevButton" onClick={handlePrevImage}>
            <FontAwesomeIcon className='chevron' icon={faChevronLeft} />
          </button>
          <span className="currentImageIndex">
            {`${currentImageIndex + 1}/${host.pictures.length}`}
          </span>
          <button className="nextButton" onClick={handleNextImage}>
            <FontAwesomeIcon className='chevron' icon={faChevronRight} />
          </button>
        </>
      )}
    </div>
  );
}

export default BannerLogement
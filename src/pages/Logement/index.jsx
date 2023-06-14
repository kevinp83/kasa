import React from 'react';
import Header from '../../components/Header';
import BannerLogement from '../../components/LogementComponents/BannerLogement'
import DescriptionLogement from '../../components/LogementComponents/DescriptionLogement';
import EquipmentsLogement from '../../components/LogementComponents/EquipmentsLogement';
import HostLogement from '../../components/LogementComponents/HostLogement';
import LocationLogement from '../../components/LogementComponents/LocationLogement';
import TitleLogement from '../../components/LogementComponents/TitleLogement';
import StarRating from '../../components/LogementComponents/StarRating';
import TagsLogement from '../../components/LogementComponents/TagsLogement';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { hostList } from '../../datas';
import './Logement.css';

function Logement(props) {
  const { id } = useParams();
  const host = hostList.find((host) => host.id === id);

  return (
    <div>
      <Header />
      <BannerLogement host={host} />
      <div className='title-host'>
        <div>
          <TitleLogement title={host.title} />
          <LocationLogement location={host.location} />
        </div>
        <HostLogement host={host.host} />
      </div>
      <div className="tags-rating-container">
        <div className="tags-logement">
          <TagsLogement tags={host.tags} />
        </div>
        <div className="rating-logement">
          <StarRating rating={host.rating}/>
        </div>
      </div>
      <div className="slides-container">
        <div className="slide">
          <DescriptionLogement description={host.description} />
        </div>
        <div className="slide">
          <EquipmentsLogement equipments={host.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
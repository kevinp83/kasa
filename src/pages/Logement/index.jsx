import React from 'react';
import Header from '../../components/Header';
import BannerLogement from '../../components/LogementComponents/BannerLogement'
import DescriptionLogement from '../../components/LogementComponents/DescriptionLogement';
import EquipmentsLogement from '../../components/LogementComponents/EquipmentsLogement';
import HostLogement from '../../components/LogementComponents/HostLogement/HostLogement';
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
      <BannerLogement className='banner-logement' host={host} />
      <div className="title-host">
        <div className='content-title'>
          <TitleLogement title={host.title} />
          <LocationLogement location={host.location} />
          <TagsLogement tags={host.tags} />
        </div>
        <div className='content-host'>
          <HostLogement className='host' host={host.host} />
          <StarRating rating={host.rating} />
        </div>
      </div>
      <div className="slides-container">
        <div className="slide">
          <DescriptionLogement className="description" description={host.description} />
        </div>
        <div className="slide">
          <EquipmentsLogement className="equipment" equipments={host.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
import React from "react";
import { useParams } from "react-router";
import hostList from "../../../datas";
import './LocationLogement.css';

function LocationLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="Location-logement">
            <span>{selectedHost.location}</span>
        </div>
    )
}

export default LocationLogement
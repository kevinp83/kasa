import React from "react";
import { useParams } from "react-router";
import hostList from "../../../datas";
import './LocationLogement.css';

function LocationLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="Location-logement">
            <h1>{selectedHost.location}</h1>
        </div>
    )
}

export default LocationLogement
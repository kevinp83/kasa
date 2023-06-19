import React from "react";
import { useParams } from "react-router";
import hostList from "../../../datas";
import './HostLogement.css';

function HostLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="Host-logement">
            <span>{selectedHost.host.name}</span>
            <img src={selectedHost.host.picture} alt={selectedHost.host.name} />
        </div>
    )
}

export default HostLogement
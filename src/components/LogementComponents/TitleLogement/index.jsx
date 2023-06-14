import React from "react";
import { useParams } from "react-router";
import hostList from "../../../datas";
import './TitleLogement.css';

function TitleLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="title-logement">
            <h1>{selectedHost.title}</h1>
        </div>
    )
}

export default TitleLogement
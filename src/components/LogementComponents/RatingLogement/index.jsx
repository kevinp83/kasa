import React from "react";
import { useParams } from "react-router";
import hostList from "../../../datas";
import './RatingLogement.css';

function RatingLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="Rating-logement">
            <h1>{selectedHost.rating}</h1>
        </div>
    )
}

export default RatingLogement
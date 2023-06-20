import React from "react";
import { useParams } from "react-router";
import hostList from "../../../datas";
import Slide from "../../Slide/slide";
import './DescriptionLogement.css';

function DescriptionLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="Description-logement">
            <Slide title="Description" content={selectedHost && selectedHost.description} />
        </div>
    )
}

export default DescriptionLogement
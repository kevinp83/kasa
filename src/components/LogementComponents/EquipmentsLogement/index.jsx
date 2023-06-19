import React from "react";
import { useParams } from "react-router";
import { hostList } from "../../../datas";
import Slide from "../../../pages/About/slide";
import './EquipmentsLogement.css';

function EquipmentLogement(props) {
  const { id } = useParams();
  const selectedHost = hostList.find((host) => host.id === id);

    return (
        <div className="Equipment-logement">
            <Slide title="Equipements" content={renderEquipmentList(selectedHost.equipments)} />
        </div>
    )
}

const renderEquipmentList = (equipments) => {
    return (
        <ul className="equipment-list">
            {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    )
}

export default EquipmentLogement
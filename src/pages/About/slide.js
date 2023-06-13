import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../components/Slide/slide.css";

const Slide = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p onClick={toggleSlide} className="drop-down">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={isOpen ? "rotate-icon" : ""}
        />
      </p>
      {isOpen && <div className="description">{description}</div>}
    </div>
  );
};

export default Slide;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../components/Slide/slide.css";

const Slide = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drop-down-content">
      <p onClick={toggleSlide} className="drop-down">
        <span>{title}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={isOpen ? "rotate-icon" : ""}
        />
      </p>
      {isOpen && <div className="description">{content}</div>}
    </div>
  );
};

export default Slide;
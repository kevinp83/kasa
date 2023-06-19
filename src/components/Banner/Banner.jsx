import React, { useState, useEffect } from "react";
import './Banner.css'

function Banner(props) {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [bannerTitle, setBannerTitle] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setBackgroundImage(`url(${require("../../assets/img/home-img.png")})`);
      setBannerTitle("Chez vous,\npartout et ailleurs");
    } else if (currentPath === "/about") {
      setBackgroundImage(`url(${require("../../assets/img/about-img.png")})`);
      setBannerTitle("");
    }
  }, []);

  return (
    <div className="banner" style={{ backgroundImage: backgroundImage}}>
      <div className="overlay"></div>
        <h1 className="banner-title">{bannerTitle}</h1>
    </div>
        );
  };

  export default Banner
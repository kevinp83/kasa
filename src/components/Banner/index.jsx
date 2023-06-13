import React, { useState, useEffect } from "react";

function Banner(props) {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [bannerTitle, setBannerTitle] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setBackgroundImage(`url(${require("../../assets/img/home-img.png")})`);
      setBannerTitle("Chez vous, partout et ailleurs");
    } else if (currentPath === "/about") {
      setBackgroundImage(`url(${require("../../assets/img/about-img.png")})`);
      setBannerTitle("");
    }
  }, []);

  const bannerStyle = {
    backgroundImage: backgroundImage,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "30px",
    height: "223px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "60px",
    mixBlendMode: "darken",
  };

  const bannerTitleStyle = {
    color: "white",
    fontSize: "3.4vw",
    fontWeight: "500",
    lineHeight: "68px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
  };

  return (
    <div className="banner" style={bannerStyle}>
      <div className="overlay"></div>
        <h1 style={bannerTitleStyle}>{bannerTitle}</h1>
        </div>
        );
  };

  export default Banner
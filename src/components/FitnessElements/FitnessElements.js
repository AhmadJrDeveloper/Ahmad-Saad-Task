import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FitnessElements.css";
import Play from "../../assets/iconfinder_maybe-30_330643.svg";

function FitnessElements({ imageUrl, title, description }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedLink, setSelectedLink] = useState("home");

  useEffect(() => {
    const category = location.pathname.substring(1);
    setSelectedLink(
      ["home", "recipes", "articles", "videos"].includes(category)
        ? category
        : "home"
    );
  }, [location.pathname]);

  const handleLinkClick = (category) => {
    setSelectedLink(category);
  };

  const handleAllArticlesClick = () => {
    navigate("/videos");
    handleLinkClick("videos");
  };
  return (
    <div
      className="Fitness-Card"
      onClick={handleAllArticlesClick}
      style={{ color: selectedLink === "videos" ? "#D5DD5A" : "" }}
    >
      <div className="ImageWithPlay">
        <img className="Fitness-Image" src={imageUrl} alt="Fitness" />
        <br />
        <img className="Play-Image" src={Play} alt="Play" />
      </div>
      <p className="Fitness-Title">{title}</p>
      <p className="Fitness-Description">{description}</p>
    </div>
  );
}

export default FitnessElements;

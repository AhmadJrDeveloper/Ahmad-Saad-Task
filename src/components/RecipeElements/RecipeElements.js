import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RecipeElements.css";

function RecipeElements({ imageUrl, title, subtitle }) {
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
    navigate("/recipes");
    handleLinkClick("recipes");
  };
  return (
    <>
      <main className="Recipe-Main">
        <div className="Recipe-Description">
          <img className="Recipe-Image" src={imageUrl} alt="Recipe Image" />
          <div className="Recipe-Card">
            <h4 className="Recipe-Description-Header">{title}</h4>
            <h5 className="Recipe-Description-SubHeader">{subtitle}</h5>
            <button
              className="Recipe-Description-Button"
              onClick={handleAllArticlesClick}
              style={{ color: selectedLink === "recipes" ? "#D5DD5A" : "" }}
            >
              Try
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default RecipeElements;

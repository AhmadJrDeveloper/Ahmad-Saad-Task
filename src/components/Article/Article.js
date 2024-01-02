import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Article.css";
import Hiking from "../../assets/hiking.jpg";
import Article1 from "../../assets/art1.jpg";
import Article2 from "../../assets/art2.jpg";
import Article3 from "../../assets/art3.jpg";
import ArticleElement from "../ArticleElements/ArticleElement";

function Article() {
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

  const articles = [
    {
      imageUrl: Article1,
      header: "5 Top Ways To Tone Your Belly",
      subHeader: "Exercise",
      date: "28th December",
    },
    {
      imageUrl: Article2,
      header: "Diet Foods You Didn't Know You Could Eat",
      subHeader: "Health",
      date: "27th December",
    },
    {
      imageUrl: Article3,
      header: "The History Of Arnold Schwarzenegger",
      subHeader: "Lifestyle",
      date: "26th December",
    },
  ];

  const handleAllArticlesClick = () => {
    const currentRoute = location.pathname;

    if (currentRoute !== "/content") {
      navigate("/articles");
      handleLinkClick("articles");
    }
  };

  return (
    <>
      <div className="Article-Container">
        <h2 className="Article-Header">TOP ARTICLES</h2>
        <article className="Article-Main">
          <img className="Article-Image" src={Hiking} alt="" />
          <p className="Article-Image-Title">
            Lifestyle <br />
            10 Benefits of Hiking: <br />
            Exercise in the Great Outdoors
          </p>
          <div className="All-Articles">
            {articles.map((article, index) => (
              <ArticleElement
                key={index}
                imageUrl={article.imageUrl}
                header={article.header}
                subHeader={article.subHeader}
                date={article.date}
              />
            ))}

            {location.pathname !== "/articles" && (
              <button
                className="All-Articles-Button"
                onClick={handleAllArticlesClick}
                style={{ color: selectedLink === "articles" ? "#D5DD5A" : "" }}
              >
                All Articles
              </button>
            )}
          </div>
        </article>
      </div>
    </>
  );
}

export default Article;

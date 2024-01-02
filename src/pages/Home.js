import React, { useState } from 'react';
import NavBar from "../components/NavBar/NavBarComponent";
import HomeLanding from "../components/HomeLanding/HomeLanding";
import Article from "../components/Article/Article";
import Recipe from "../components/Recipe/Recipe";
import Fitness from "../components/Fitness/Fitness";
import Footer from "../components/Footer/Footer";
import "./Home.css";

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div className="container">
      <NavBar onOptionChange={handleOptionChange}/>
      <HomeLanding />
      <Article />
      <Recipe />
      <Fitness />
      </div>
      <Footer />

    </>
  );
}

export default Home;

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/newLogo.png";
import "./NavBarComponent.css";

function NavBarComponent() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");

  };

  const [selectedLink, setSelectedLink] = useState('home');

  useEffect(() => {
    const category = location.pathname.substring(1);
  
    setSelectedLink(['home', 'recipes', 'articles', 'videos'].includes(category) ? category : 'home');
  }, [location.pathname]);
  
  const handleLinkClick = (category) => {
    setSelectedLink(category);
    showNavbar();
  };

  return (
    <header className="NavBar-Header">
      <div className="Header-Logo">
        <img src={Logo} alt="" className="Header-Logo-Image" />
        <h3 className="Header-Logo-H3">Shape</h3>
      </div>
      <nav ref={navRef}>
        <Link to={"/"} className={selectedLink === 'home' ? 'active' : ''}>
          <a onClick={() => handleLinkClick('home')} style={{ color: selectedLink === 'home' ? '#D5DD5A' : '' }}>
            HOME
          </a>
        </Link>
        <Link to={"/recipes"} className={selectedLink === 'recipes' ? 'active' : ''}>
          <a onClick={() => handleLinkClick('recipes')} style={{ color: selectedLink === 'recipes' ? '#D5DD5A' : '' }}>
            RECIPES
          </a>
        </Link>
        <Link to={"/articles"} className={selectedLink === 'articles' ? 'active' : ''}>
          <a onClick={() => handleLinkClick('articles')} style={{ color: selectedLink === 'articles' ? '#D5DD5A' : '' }}>
            ARTICLES
          </a>
        </Link>
        <Link to={"/videos"} className={selectedLink === 'videos' ? 'active' : ''}>
          <a onClick={() => handleLinkClick('videos')} style={{ color: selectedLink === 'videos' ? '#D5DD5A' : '' }}>
            VIDEOS
          </a>
        </Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBarComponent;

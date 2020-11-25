import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import Select from "react-select";

import { FcViewDetails } from "react-icons/fc";
import { BsStarFill, BsPencil } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";

import "./styles.css";

import cookie from "../../assets/cookie.svg";
import available from "../../assets/available.svg";
import wave from "../../assets/wave1.svg";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import brazilFlag from "../../assets/brazil-flag.png";
import usaFlag from "../../assets/usa-flag.jpg";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import CardRecipe from "../../components/CardRecipe";
import MenuDropdown from "../../components/MenuDropdown";
import pt from "../../utils/languages/pt";
import en from "../../utils/languages/en";
import { useState } from "react";

counterpart.registerTranslations("pt", pt);
counterpart.registerTranslations("en", en);

counterpart.setLocale("pt");

const Home = () => {
  const userName = localStorage.getItem("userName");

  const menuBtn = document.querySelector("menu-btn");
  let menuOpen = false;

  const options = [
    { value: "pt", label: <div className="option-select-container"><img src={brazilFlag} className="brazil-flag-size"/>Português </div> },
    { value: "en", label: <div className="option-select-container"><img src={usaFlag} className="usa-flag-size"/>Inglês </div> }
  ];

  const placeholder = [
    {label: <div className="option-select-container"><img src={brazilFlag} className="brazil-flag-size"/>Português </div> },
  ];

  const [language, setLanguage] = useState("");

  function onLanguageChange(selectedOption) {
    console.log(selectedOption);
    setLanguage({ language: selectedOption.value });
    counterpart.setLocale(selectedOption.value);
  }

  function openCloseMenu() {
    if (!menuOpen) {
      menuOpen = true;
    } else {
      menuOpen = false;
    }
  }

  return (
    <div id="page-home">
      <NavBar children={userName} />

      <div className="optionsBar">
        <ul>
          <li>
            <div className="recipeContainer">
              <Link
                to="/receitas"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Translate content="menuItems.firstItem" />
              </Link>
              <FcViewDetails size={24} className="recipeIcon" />
            </div>
          </li>
          <li>
            <div className="favoriteContainer">
              <Translate content="menuItems.secondItem" />
              <BsStarFill size={24} color="yellow" />
            </div>
          </li>
          <li>
            <div className="communityContainer">
              <Link
                to="/parcerias"
                style={{ textDecoration: "none", color: "black" }}
              >
              <Translate content="menuItems.thirdItem" />
              </Link>
              <FaUserFriends
                size={24}
                color="green"
                className="communityIcon"
              />
            </div>
          </li>

          <li>
            <div className="communityContainer">
              <Link
                to="/negócios"
                style={{ textDecoration: "none", color: "black" }}
              >
              <Translate content="menuItems.fourthItem" />
              </Link>
              <MdBusinessCenter
                size={24}
                color="darkslategray"
                className="communityIcon"
              />
            </div>
          </li>
        </ul>
        <div className="language-container">
          <Select
            defaultValue={placeholder}            
            className="select-container"
            onChange={onLanguageChange}
            options={options}
          />
        </div>
        {/* <select value={language} onChange={onLanguageChange}>
          <option></option>
          <option value="en">EN</option>
          <option value="pt">PT</option>
        </select> */}
      </div>
      <MenuDropdown />

      <div className="thumb-content">
        <div className="carousel-container">
          <div className="carouselPosition">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block carouselSlider"
                  src={slide1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carouselSlider"
                  src={slide2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carouselSlider"
                  src={slide3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="thumb-texts">
          <div className="text-thumb">
            <img
              src={cookie}
              className="image-welcome"
              alt="Menina abraçada com um cookie"
            />
            <Translate content="firstWelcomeTitle" component="p" className="welcome" />
            <Translate content="firstWelcomeSubtitle" component="p" className="welcome-subtitle" unsafe={true} />
            {/*<img src={stars} /> */}
          </div>

          <div className="text-thumb2">
            <img
              src={available}
              className="image-welcome"
              alt="Pessoas escolhendo receitas"
            />
            <Translate content="secondWelcomeTitle" component="p" className="welcome" />
            {/* <p className="welcome">Veja e avalie as melhores receitas</p> */}
            <Translate content="secondWelcomeSubtitle" component="p" className="welcome-subtitle" />
          </div>
        </div>
      </div>
      <div>
        <img src={wave} alt="Efeito de ondas" className="wave-size" />
      </div>

      {/**Contâiner das receitas */}

      <div className="recipes-container">
        <div className="title-container">
          <h1 className="title-style"><Translate content="lovedTitle" /></h1>
          {/*<div className="search-container">
                        <input placeholder="Pesquisar receita..." className="search-bar" />
                        <MdSearch size={30} color="black" className="search-icon"/>
                    </div> */}
          <div className="post-container">
            <Link to="/register-recipe" className="post-recipe">
            <Translate content="postRecipe" />
            </Link>
            <BsPencil size={30} color="green" className="pencilIcon" />
          </div>
        </div>
        <div className="grid-one">
          <CardRecipe />
          <CardRecipe />
          <CardRecipe />
        </div>

        <div className="grid-one">
          <CardRecipe />
          <CardRecipe />
          <CardRecipe />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

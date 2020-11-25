import React, { useState } from "react";
import Translate from "react-translate-component";
import counterpart from "counterpart";

import "./styles.css";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MenuDropdown from "../../components/MenuDropdown";
import RateModal from "../../components/RateModal";

import miniChurros from "../../assets/mini-churros.webp";
import pudimCopo from "../../assets/pudim-copo.jpg";
import cheesecake from "../../assets/cheesecake.jpg";
import stars from "../../assets/stars.png";
import { AiFillHeart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

import pt from "../../utils/languages/pt";
import en from "../../utils/languages/en";

counterpart.registerTranslations("pt", pt);
counterpart.registerTranslations("en", en);

counterpart.setLocale("pt");

const RecipeDetails = () => {
  const userName = localStorage.getItem("userName");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="page-recipes">
      <NavBar children={userName} />
      <MenuDropdown />
      <h1 className="title-container"><Translate content="recipeListTitle" /></h1>
      <div className="recipes-container">
        <div className="card-recipe-details">
          <div className="card-image">
            <img
              src={cheesecake}
              className="size-card-image"
              alt="Rocambole delicioso"
            />
          </div>
          <div className="recipe-title">
            <span>Cheesecake</span>
            <AiFillHeart size={60} className="favorite-recipe" fill="red" />
          </div>
          <div className="card-description">
            <span>Você ficará encantado com essa mistura de sabores</span>
          </div>
          <div className="card-detail">
            <div className="rating-recipe">
              <h1 className="title-rating">Classificação: </h1>
              <img src={stars} alt="estrelas" className="size-stars" />
            </div>
            <span>
              <FiUser />
              Vitor Pinheiro
            </span>
          </div>
          <RateModal />
        </div>
      </div>

      <div className="recipes-container">
        <div className="card-recipe-details">
          <div className="card-image">
            <img
              src={pudimCopo}
              className="size-card-image"
              alt="Rocambole delicioso"
            />
          </div>
          <div className="recipe-title">
            <span>Pudim no copo</span>
            <AiFillHeart size={60} className="favorite-recipe" fill="red" />
          </div>
          <div className="card-description">
            <span>Seu copo nunca serviu algo tão gostoso</span>
          </div>
          <div className="card-detail">
            <div className="rating-recipe">
              <h1 className="title-rating">Classificação: </h1>
              <img src={stars} alt="estrelas" className="size-stars" />
            </div>
            <span>
              <FiUser />
              Vitor Pinheiro
            </span>
          </div>

          <RateModal />
        </div>
      </div>

      <div className="recipes-container">
        <div className="card-recipe-details">
          <div className="card-image">
            <img
              src={miniChurros}
              className="size-card-image"
              alt="Rocambole delicioso"
            />
          </div>
          <div className="recipe-title">
            <span>Mini Churros</span>
            <AiFillHeart size={60} className="favorite-recipe" fill="red" />
          </div>
          <div className="card-description">
            <span>O tamanho é pequeno, mas o sabor é enorme</span>
          </div>
          <div className="card-detail">
            <div className="rating-recipe">
              <h1 className="title-rating">Classificação: </h1>
              <img src={stars} alt="estrelas" className="size-stars" />
            </div>
            <span>
              <FiUser />
              Vitor Pinheiro
            </span>
          </div>
          <RateModal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetails;

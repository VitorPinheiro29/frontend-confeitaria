import React from 'react';

import './styles.css';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import miniChurros from '../../assets/mini-churros.webp';
import pudimCopo from '../../assets/pudim-copo.jpg';
import cheesecake from '../../assets/cheesecake.jpg';
import stars from '../../assets/stars.png';
import { AiFillHeart } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

const RecipeDetails = () => {
  const userName = localStorage.getItem('userName');
  return (
    <div id="page-recipes">
      <NavBar children={userName} />
      <h1 className="title-container">Confira todas as receitas</h1>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetails;

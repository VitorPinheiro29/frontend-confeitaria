import React from 'react';

import './styles.css';

import rocambole from '../../assets/rocambole.webp';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

const CardRecipe = () => {
  return (
    <Link to="/recipe-details" className="card-recipe">
      <div className="card-image">
        <img
          src={rocambole}
          className="size-card-image"
          alt="Rocambole delicioso"
        />
      </div>
      <div className="recipe-title">
        <span>Rocambole de chocolate</span>
        <AiFillHeart size={36} className="favorite-recipe" />
      </div>
      <div className="card-description">
        <span>Prepare-se para saborear o melhor rocambole de sua vida</span>
      </div>
      <div className="card-detail">
        <span>
          <FiUser />
          Vitor Pinheiro
        </span>
      </div>
    </Link>
  );
};

export default CardRecipe;

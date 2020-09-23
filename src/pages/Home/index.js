import React from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { GiCakeSlice } from 'react-icons/gi';
import { BsStarFill, BsPencil } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import './styles.css';

import cookie from '../../assets/cookie.svg';
import available from '../../assets/available.svg';
import wave from '../../assets/wave1.svg';
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CardRecipe from '../../components/CardRecipe';
// eslint-disable-next-line no-lone-blocks
{
  /*import stars from '../../assets/stars.png' */
}

const Home = () => {
  const userName = localStorage.getItem('userName');

  const menuBtn = document.querySelector('menu-btn');
  let menuOpen = false;

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
            <Link
              to="/recipe-details"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Receitas
            </Link>
            <FcViewDetails size={24} className="recipeIcon" />
          </li>
          <li>
            Confeiteiros
            <GiCakeSlice size={24} color="red" className="cakeIcon" />
          </li>
          <li className="favoriteTitle">
            Favoritos
            <BsStarFill size={24} color="yellow" className="favoriteIcon" />
          </li>
          <li className="communityTitle">
            <Link
              to="/partnerships"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Parcerias
            </Link>
            <FaUserFriends size={24} color="green" className="communityIcon" />
          </li>
        </ul>
      </div>

      <div className="menu-bar">
        <Dropdown className="button-style">
          <Dropdown.Toggle id="dropdown-basic" className="toggle-button">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="menu-dropdown">
              Receitas <FcViewDetails size={24} className="recipeIcon" />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              Confeiteiros{' '}
              <GiCakeSlice size={24} color="red" className="cakeIcon" />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Favoritos{' '}
              <BsStarFill size={24} color="yellow" className="favoriteIcon" />
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              Parcerias{' '}
              <FaUserFriends
                size={24}
                color="green"
                className="communityIcon"
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

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
            <p className="welcome">Mergulhe nesse doce universo</p>
            <p className="welcome-subtitle">
              Tudo como você <strong>nunca viu!</strong>
            </p>
            {/*<img src={stars} /> */}
          </div>

          <div className="text-thumb2">
            <img
              src={available}
              className="image-welcome"
              alt="Pessoas escolhendo receitas"
            />
            <p className="welcome">Veja e avalie as melhores receitas</p>
            <p className="welcome-subtitle">A vida nunca foi tão doce!</p>
          </div>
        </div>
      </div>
      <div>
        <img src={wave} alt="Efeito de ondas" className="wave-size" />
      </div>

      {/**Contâiner das receitas */}

      <div className="recipes-container">
        <div className="title-container">
          <h1 className="title-style">Doces mais amados</h1>
          {/*<div className="search-container">
                        <input placeholder="Pesquisar receita..." className="search-bar" />
                        <MdSearch size={30} color="black" className="search-icon"/>
                    </div> */}
          <div className="post-container">
            <Link to="/register-recipe" className="post-recipe">
              Postar receita
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

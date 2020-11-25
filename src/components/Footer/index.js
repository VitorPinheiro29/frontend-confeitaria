import React from 'react';
import counterpart from "counterpart";
import Translate from "react-translate-component";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from 'react-icons/fa';

import './styles.css';

import lucasProfile from '../../assets/lucasProfile.jpeg';
import vitorProfile from '../../assets/vitorProfile.jpeg';
import footerImg from '../../assets/footer.svg';

import pt from "../../utils/languages/pt";
import en from "../../utils/languages/en";

counterpart.registerTranslations("pt", pt);
counterpart.registerTranslations("en", en);

counterpart.setLocale("pt");

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-title">Doce açucarado</h1>
      <span className="footer-description"><Translate content="footerSubtitle" /></span>
      <div className="details">
        <div className="about">
          <p className="title-developers"><Translate content="developer" /></p>
          <li className="developer-item">
            <img
              src={lucasProfile}
              alt="Foto do Lucas"
              className="image-profile"
            />
            <div className="developers-medias">
              <span className="developer-description">
                Lucas Gabriel | Back-end
              </span>
              <FaGithub size={20} color="black" className="social-item" />
              <FaLinkedin size={20} color="blue" className="social-item" />
              <FaInstagram size={20} color="pink" className="social-item" />
              <FaFacebook size={20} color="blue" className="social-item" />
            </div>
          </li>
          <li className="developer-item">
            <img
              src={vitorProfile}
              alt="Foto do Lucas"
              className="image-profile"
            />
            <div className="developers-medias">
              <span className="developer-description">
                Vitor Pinheiro | Front-end
              </span>
              <FaGithub size={20} color="black" className="social-item" />
              <FaLinkedin size={20} color="blue" className="social-item" />
              <FaInstagram size={20} color="pink" className="social-item" />
              <FaFacebook size={20} color="blue" className="social-item" />
            </div>
          </li>
        </div>
        <div className="footer-image-container">
          <img
            src={footerImg}
            className="footer-image-size"
            alt="Imagem do footer"
          />
        </div>
        <div className="social-medias">
          <span className="title-medias"><Translate content="socialMediasTitle" /></span>
          <ul>
            <li className="social-item">
              <FaFacebook size={48} color="blue" />
            </li>
            <li className="social-item">
              <FaInstagram size={48} color="pink" />
            </li>
            <li className="social-item">
              <FaYoutube size={48} color="red" />
            </li>
          </ul>

          <span className="subtitle-medias">
            <Translate content="socialMediasSubtitle" />
          </span>
        </div>
      </div>
      <div className="all-rights">
        <span><Translate content="rightsReserved" /></span>
      </div>
    </div>
  );
};

export default Footer;

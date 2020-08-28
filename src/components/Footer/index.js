import React from 'react';
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

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-title">Doce açucarado</h1>
      <span className="footer-description">Um site para fins educacionais</span>
      <div className="details">
        <div className="about">
          <p className="title-developers">Desenvolvedores</p>
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
          <img src={footerImg} className="footer-image-size" />
        </div>
        <div className="social-medias">
          <span className="title-medias">Nossas redes</span>
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
            Curta nossos conteúdos e fique por dentro de tudo!
          </span>
        </div>
      </div>
      <div className="all-rights">
        <span>2020 @DoceAçucarado - Todos os direitos reservados</span>
      </div>
    </div>
  );
};

export default Footer;

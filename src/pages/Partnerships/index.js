import React from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import logoFogaccieri from '../../assets/logo_rafael.png';
import logoBruno from '../../assets/logo_bruno.png';
import logoMolera from '../../assets/logo_molera.png';
import logoNegrini from '../../assets/logo_negrini.png';
import stars from '../../assets/stars.jpeg';

import './styles.css';

function Partnerships() {
  const userName = localStorage.getItem('userName');
  return (
    <div className="hidden-scroll">
      <NavBar children={userName} />
      <section id="partnerships-container">
        <div className="card-container">
          <div className="logo-container-rafael">
            <img src={logoFogaccieri} alt="logo" className="image-rafael" />
          </div>
          <div className="details-container">
            <div className="branch-container">
              <h1 className="branch-title">Ramo: </h1>
              <h2 className="branch-content color-rafael"> Comida italiana</h2>
              <h2 className="branch-content color-rafael"> Massas</h2>
            </div>
            <div className="description-container">
              <h1 className="description-title">Lema: </h1>
              <h2 className="description-content">
                Somos o melhor da massa, somos Fogaccieri.
              </h2>
            </div>
            <div className="notes-container">
              <h1 className="notes-title">Classificação: </h1>
              <img src={stars} alt="ratings" className="notes-image" />
            </div>
            <button className="visit-site color-rafael">Visitar site</button>
          </div>
        </div>

        <div className="card-container">
          <div className="logo-container-bruno">
            <img src={logoBruno} alt="logo" className="image-bruno" />
          </div>
          <div className="details-container">
            <div className="branch-container">
              <h1 className="branch-title">Ramo: </h1>
              <h2 className="branch-content color-bruno"> Lanches gourmet</h2>
              <h2 className="branch-content color-bruno"> Condimentos</h2>
            </div>
            <div className="description-container">
              <h1 className="description-title">Descrição: </h1>
              <h2 className="description-content">
                Hmmmmm hamburguinho gostoso
              </h2>
            </div>
            <div className="notes-container">
              <h1 className="notes-title">Classificação: </h1>
              <img src={stars} alt="ratings" className="notes-image" />
            </div>
            <button className="visit-site color-bruno">Visitar site</button>
          </div>
        </div>

        <div className="card-container">
          <div className="logo-container-molera">
            <img src={logoMolera} alt="logo" className="image-molera" />
          </div>
          <div className="details-container">
            <div className="branch-container">
              <h1 className="branch-title">Ramo: </h1>
              <h2 className="branch-content color-molera"> Tacos</h2>
              <h2 className="branch-content color-molera"> Nachos</h2>
            </div>
            <div className="description-container">
              <h1 className="description-title">Descrição: </h1>
              <h2 className="description-content">
                O mexicano que entra em você
              </h2>
            </div>
            <div className="notes-container">
              <h1 className="notes-title">Classificação: </h1>
              <img src={stars} alt="ratings" className="notes-image" />
            </div>
            <button className="visit-site color-molera">Visitar site</button>
          </div>
        </div>

        <div className="card-container">
          <div className="logo-container-negrini">
            <img src={logoNegrini} alt="logo" className="image-negrini" />
          </div>
          <div className="details-container">
            <div className="branch-container">
              <h1 className="branch-title">Ramo: </h1>
              <h2 className="branch-content color-negrini"> Vinhos finos</h2>
              <h2 className="branch-content color-negrini"> Alcoólicos</h2>
            </div>
            <div className="description-container">
              <h1 className="description-title">Lema: </h1>
              <h2 className="description-content">
                Das adegas à sua mesa, sem perder a elegância
              </h2>
            </div>
            <div className="notes-container">
              <h1 className="notes-title">Classificação: </h1>
              <img src={stars} alt="ratings" className="notes-image" />
            </div>
            <button className="visit-site color-negrini">Visitar site</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Partnerships;

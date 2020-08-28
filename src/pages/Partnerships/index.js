import React from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import './styles.css';

function Partnerships() {
  return (
    <div>
      <NavBar />
      <section id="partnerships-container">
        <div class="card-container">
          <div class="logo-container"></div>
          <div class="details-container"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Partnerships;

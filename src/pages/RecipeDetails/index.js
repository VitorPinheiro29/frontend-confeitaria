import React from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const RecipeDetails = () => {
  const userName = localStorage.getItem('userName');
  return (
    <>
      <NavBar children={userName} />
      <div id="page-recipes">
        <h1>Confira todas as receitas</h1>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetails;

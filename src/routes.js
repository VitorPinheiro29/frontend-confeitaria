import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './pages/RecipeDetails';
import Partnerships from './pages/Partnerships';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register"></Route>
      <Route component={CreateRecipe} path="/register-recipe"></Route>
      <Route component={RecipeDetails} path="/receitas"></Route>
      <Route component={Partnerships} path="/parcerias"></Route>
    </BrowserRouter>
  );
};

export default Routes;

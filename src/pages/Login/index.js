import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api.js';

import './styles.css';

import backgroundLogin from '../../assets/login.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); /*guarda os dados */

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };

      const response = await api.post('/user/authenticate', data);

      // eslint-disable-next-line no-lone-blocks
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);

      history.push('/');
    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="body">
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleLogin} className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="text"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" class="btn solid" id="sign-up-btn">
                Entrar
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Novo por aqui?</h3>
              <p>Crie sua conta e faça o mundo mais doce!</p>
            </div>
            <Link
              to="/register"
              type="text"
              class="btn transparent"
              id="sign-up-btn"
            >
              Criar
            </Link>
            <img src={backgroundLogin} class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

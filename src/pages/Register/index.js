import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import api from '../../services/api.js';

import './styles.css';

// eslint-disable-next-line no-unused-vars
import backgroundRegister from '../../assets/register.svg';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); /*guarda os dados */

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const data = {
        name,
        email,
        password,
      };

      const response = await api.post('/user/register', data);

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);
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
            <form onSubmit={handleRegister} className="sign-in-form">
              <h2 className="title">Cadastrar</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
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
                Criar conta
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div class="panel left-panel">
            <div class="content">
              <h3>Já é um de nós?</h3>
              <p>Faça seu login e torne sua vida mais doce!</p>
            </div>
            <Link
              to="/login"
              type="text"
              class="btn transparent"
              id="sign-up-btn"
            >
              Entrar
            </Link>
            <img src={backgroundRegister} class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

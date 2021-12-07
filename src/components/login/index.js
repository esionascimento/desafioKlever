import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../services/fetchActions';

import './Login.css';

function initialState() {
  return { email: '', password: '' };
}

function ComponentLogin() {
  const [valuesLogin, setValues] = useState(initialState);
  const [validLogin, setValidLogin] = useState(false);
  const { email, password } = valuesLogin;

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...valuesLogin,
      [name]: value,
    })
  }
  
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const { data: { token } } = await login({ email, password });
      localStorage.setItem('token', token);
      window.location.pathname = '/dashboard';
    } catch (err) {
      setValidLogin(err);
    }
  }

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        {validLogin && 
          <h3>Credenciais inexistente ou invalida</h3>
        }
        <div className="input-form">
          <div className="input-div">
            <input type="text"
              name="email"
              className="input-in input-ra"
              value={email}
              required
              placeholder="email@email.com"
              onChange={onChange}
            />
          </div>
          <div className="input-div">
            <input type="password"
              name="password"
              className="input-in input-ra"
              onChange={onChange}
              value={password}
              required
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="input-form">
          <button
            type="submit"
            value="Login"
            className="input-login input-ra"
          >
            Entrar
          </button>
        </div>
        <hr className="hr2" />
        <div className="footer">
          <div className="links">
            Não tem uma conta?
            <Link to="/cadastro">Criar nova conta</Link>
          </div>
          {/* <div className="">
            <a href="#">Esqueceu sua senha?</a>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default ComponentLogin;

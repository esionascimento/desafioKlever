import React from 'react';

import Login from '../../components/login';

import './Home.css'

function Home() {
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="left">
            <h1>Desafio Klever</h1>
          </div>
          <div className="right">
            <Login />
          </div>
        </div>
      </div>
      <footer className="rodape">
        Web site desenvolvido por Esio Rodrigues
      </footer>
    </>
  );
}

export default Home;

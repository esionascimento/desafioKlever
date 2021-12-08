import React, { useState, useEffect } from 'react';
import { dashboard } from '../../services/fetchActions';
import { useSelector } from 'react-redux';

import './detalhesContatos.css';

function NomesContatos() {
  const { contato } = useSelector(state => state.dashboard);
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    dashboard().then((aux) => {
      if (aux.data["length"] > 0) {
        const salve = aux.data[0].data;
        salve.map((data, index) => contato === salve[index].nome &&
            setData(data)
        )
      }
    });
  },[contato]);

  return (
    <div>
      {contato.length > -1
        ? <div>
            <p>Nome: {data.nome}</p>
            <p>Sobrenome: {data.sobrenome}</p>
            <p>Telefone: {data.telefone}</p>
            <p>Email: {data.email}</p>
            <p>Data de nascimento: {data.dataNascimento}</p>
            <p>Endereço: {data.endereco}</p>
          </div>
        : <p>Detalhe contato</p>
      }
    </div>
  );
}

export default NomesContatos;

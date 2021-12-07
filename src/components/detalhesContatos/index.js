import React, { useState, useEffect } from 'react';
import { dashboard, dashboardDelete } from '../../services/fetchActions';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import { Reload } from '../reload';

import './detalhesContatos.css';

function NomesContatos() {
  const { contato } = useSelector(state => state.dashboard);
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    dashboard().then((aux) => {
      if (aux.data.length > 0) {
        const salve = aux.data[0].data;
        salve.map((data, index) =>{
          if (contato === salve[index].nome) {
            setData(data);
          }
        })
      }
    });
  },[contato]);

  const RemoverContato = async () =>  {
    const result = await dashboardDelete(contato);
    if (!result)
      message.success('Contato removido com sucesso.');
    else
      message.error('Erro: remover contato');
    Reload();
  }

  return (
    <div>
      {data
        ? <div>
            <div className="dcButton">
              <button onClick={() => RemoverContato()}>Remover Contato</button>
            </div>
            <p>Nome: {data.nome}</p>
            <p>Sobrenome: {data.sobrenome}</p>
            <p>Telefone: {data.telefone}</p>
            <p>Email: {data.email}</p>
            <p>Data de nascimento: {data.dataNascimento}</p>
            <p>Endereço: {data.endereco}</p>
          </div>
        : <p>erro</p>
      }
    </div>
  );
}

export default NomesContatos;

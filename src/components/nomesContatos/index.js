import { useState, useEffect } from 'react';
import { fetchDashboard, dashboardDelete } from '../../services/fetchActions';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSelectContato } from '../../store/dashboard/Dashboard.actions';
import { message } from 'antd';
import { Reload } from '../reload';
import { Detalhes } from '../detalhesContatos/Detalhes';
import 'antd/dist/antd.css';
import { VisibleModaldetalhes } from '../../store/visibleModal/visibleModal.actions';

import { Input, Div } from './nomesContatos';

function NomesContatos() {
  const dispatch = useDispatch();
  const [data, setData ] = useState([]);
  const {nome} = useSelector((state) => state.dashboard);

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data) {
        const salve = aux.data[0].data;
        setData(salve);
      }
    });
  },[nome])

  function onClick(e) {
    dispatch(DashboardSelectContato(e.target.name));
    dispatch(VisibleModaldetalhes(true));
  }

  const RemoverContato = async (event) =>  {
    const result = await dashboardDelete(event.target.name);

    if (!result)
      message.success('Contato removido com sucesso.');
    else
      message.error('Erro: remover contato');
    Reload();
  }

  return (
    <div>
      {data.length > 0
        ? data.map((or, index) => (
            <Div key={ index }>
              <Input
                type="button"
                className="inputContatos"
                onClick={onClick}
                name={`${or["nome"]}`}
                value={`${or["nome"]} ${or["sobrenome"] ? or["sobrenome"]: ""}`}
                />
              <button>Editar</button>
              <button name={`${or["nome"]}`} onClick={(e) => RemoverContato(e)}>Deletar</button>
            </Div>
        ))
        : <p>Nenhum contato</p>
      }
      <Detalhes />
    </div>
  );
}

export default NomesContatos;

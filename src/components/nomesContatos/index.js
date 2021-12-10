import { useState, useEffect } from 'react';
import { fetchDashboard, dashboardDelete } from '../../services/fetchActions';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardSelectContato } from '../../store/dashboard/Dashboard.actions';
import { message } from 'antd';
import { Reload } from '../reload';
import { Detalhes } from '../detalhesContatos/Detalhes';
import { EditarContato } from '../editarContato';
import 'antd/dist/antd.css';
import { VisibleModaldetalhes, VisibleModalEditar } from '../../store/visibleModal/visibleModal.actions';

import { Input, Div } from './nomesContatos';

export function NomesContatos() {
  const dispatch = useDispatch();
  const [data, setData ] = useState([]);
  const {name} = useSelector((state) => state.dashboard);

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data && aux.data[0]) {
        const salve = aux.data[0].data;
        setData(salve);
      }
    });
  },[name])

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

  const editar = (e) => {
    dispatch(DashboardSelectContato(e.target.name));
    dispatch(VisibleModalEditar(true));
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
                name={`${or["name"]}`}
                value={`${or["name"]} ${or["sobrenome"] ? or["sobrenome"]: ""}`}
                />
              <button name={`${or["name"]}`} onClick={(e) => editar(e)}>Editar</button>
              <button name={`${or["name"]}`} onClick={(e) => RemoverContato(e)}>Deletar</button>
            </Div>
        ))
        : <p>Nenhum contato</p>
      }
      <Detalhes />
      <EditarContato />
    </div>
  );
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';

import { NomesContatos } from '../../components/nomesContatos';
import { NewContact } from '../../components/newContact/NewContact';
import { VisibleModalNewContact } from '../../store/visibleModal/visibleModal.actions';

import { Header, Li, DivBody, DivEsquerda, DivHeaderEsquerdo, DivDashboard } from './DashboardCss';

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [redirect, setRedirect] = React.useState(false);

  const showModal = () => {
    dispatch(VisibleModalNewContact(true));
  };

  const sair = () => {
    localStorage.removeItem('token');
    setRedirect(true);
  }

  if (redirect) {
    history.push("/");
  }

  return (
    <DivDashboard>
      <Header>
        <DivHeaderEsquerdo>
          <Li onClick={showModal}>Novo contato</Li>
          <Li>Notícias</Li>
        </DivHeaderEsquerdo>
        <Li onClick={sair}>Sair</Li>
      </Header>
      <DivBody>
        <DivEsquerda>
            <NomesContatos />
        </DivEsquerda>
      </DivBody>
      <NewContact />
    </DivDashboard>
  );
}

export default Dashboard;

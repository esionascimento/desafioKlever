import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal, message } from 'antd';
import 'antd/dist/antd.css';


import NomesContatos from '../../components/nomesContatos';
import DetalhesContatos from '../../components/detalhesContatos';
import { FormContato } from '../../components/criarContato';
import { dashboardCreate } from '../../services/fetchActions';
import { Reload } from '../../components/reload';

import './Dashboard.css';
import { Header, Li, LiSair, DivBody } from './Dashboard';

function Dashboard() {
  const history = useHistory()
  const reduxContato = useSelector((state) => state.dashboard);
  const [redirect, setRedirect] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      dashboardCreate(reduxContato)
      .then(() =>{
        message.success('Contato Salvo');
      }).catch(() => {
        message.error('Erro: salvar contato');
      });
      Reload();
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const sair = () => {
    localStorage.removeItem('token');
    setRedirect(true);
  }

  if (redirect) {
    history.push("/");
  }

  return (
    <>
      <Modal
        title="Novo Contato"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {FormContato()}
      </Modal>

      <Header>
        <Li onClick={showModal}>Novo contato</Li>
        <Li onClick={sair}>Sair</Li>
      </Header>
      <DivBody>
        <div className="esquerda">
          <div>
            <NomesContatos />
          </div>
        </div>
        <div className="direita">
          <div>
            <DetalhesContatos />
          </div>
        </div>
      </DivBody>
    </>
  );
}

export default Dashboard;

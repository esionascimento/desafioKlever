import React/* , { useState } */ from 'react';
import {  Button } from 'antd';
import { useHistory } from 'react-router-dom';
/* import { useDispatch } from 'react-redux';
import { SalveFormContato } from '../store/dashboard/Dashboard.actions'; */

export function FormContato() {
  /* const dispatch = useDispatch(); */
  const history = useHistory()
  /* const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
    email: '',
  }); */
  /* const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal'); */
  const [redirect, setRedirect] = React.useState(false);
  
  /* const reduxContato = useSelector((state) => state.dashboard); */
  
  const showModal = () => {
    /* setVisible(true); */
  };
  /* console.log('oi');
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  }; */
  
  /* const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  }; */

  /* useEffect(() => {
    dispatch(SalveFormContato(form));
  },[form]); */

  /* function onChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  } */

/*   function formulario() {
    return (
      <div className="formContato">
        <form>
          <div>
            <label>Nome: </label>
            <input type="text" name="nome" onChange={onChange} required></input>
          </div>
          <div>
            <label>Sobrenome: </label>
            <input type="text" name="sobrenome" onChange={onChange}></input>
          </div>
          <div>
            <label>Telefone: </label>
            <input type="number" name="telefone" onChange={onChange} required></input>
          </div>
          <div>
            <label>Data de nascimento: </label>
            <input type="date" name="dataNascimento" onChange={onChange}></input>
          </div>
          <div>
            <label>Endereço: </label>
            <input type="email" name="endereco" onChange={onChange}></input>
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" onChange={onChange}></input>
          </div>
        </form>
      </div>
    );
  } */
  /* const handleOk = () => {
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
  }; */

  const sair = () => {
    localStorage.removeItem('token');
    setRedirect(true);
  }

  if (redirect) {
    history.push("/");
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      {/* <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {formulario()}
        <p>{modalText}</p>
        <p>O modal será fechado após um segundos</p>
      </Modal> */}
      <header className="app-header">
        <ul className="div">
          <li onClick={showModal()}>Novo contato</li>
        </ul>
        <ul className="div">
          <li onClick={sair()}>Sair</li>
        </ul>
      </header>
    </>
  );
}

/* 
  return (
    <>
      <header className="app-header">
        <ul className="div">
          <li onClick={showModal()}>Novo contato</li>
        </ul>
        <ul className="div">
          <li onClick={sair()}>Sair</li>
        </ul>
      </header>
    </>
  );
};
 */
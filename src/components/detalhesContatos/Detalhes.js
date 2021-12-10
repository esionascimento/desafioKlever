import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { fetchDashboard } from '../../services/fetchActions';
import { useSelector, useDispatch } from 'react-redux';
import { VisibleModaldetalhes } from '../../store/visibleModal/visibleModal.actions';

export const Detalhes = () => {
  const dispatch = useDispatch();
  const { contato } = useSelector(state => state.dashboard);
  const { visibleModalDetalhes } = useSelector(state => state.visibleModal);

  const [data, setData ] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  useEffect(() => {
    setVisible(visibleModalDetalhes);
  }, [visibleModalDetalhes]);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      dispatch(VisibleModaldetalhes(false));
    }, 500);
  };

  const handleCancel = () => {
    setVisible(false);
    dispatch(VisibleModaldetalhes(false));
  };

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data["length"] > 0) {
        const salve = aux.data[0].data;
        salve.map((data, index) => contato === salve[index].name &&
            setData(data)
        )
      }
    });
  },[contato]);

  function formDetalhes() {
    return (
      <form>
        <p>Nome: <span>{data.name}</span></p>
        <p>Sobrenome: <span>{data.sobrenome}</span></p>
        <p>Telefone: <span>{data.telefone}</span></p>
        <p>Email: <span>{data.email}</span></p>
        <p>Data de nascimento: <span>{data.dataNascimento}</span></p>
        <p>Endereço: <span>{data.endereco}</span></p>
      </form>
    )
  }

  return (
    <>
      <Modal
        title={`Detalhes do(a) ${data.name}`}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        >
        {formDetalhes()}
      </Modal>
    </>
  );
};

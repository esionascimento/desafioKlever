import React, { useEffect } from "react";
import { Modal, Button } from "antd";
import { fetchDashboard } from "../../services/fetchActions";
import { useSelector, useDispatch } from "react-redux";
import { VisibleModaldetalhes } from "../../store/visibleModal/visibleModal.actions";

import { Form, P, DivForm, Span } from "./detalhesContatosCss";

export const Detalhes = () => {
  const dispatch = useDispatch();
  const { contato } = useSelector((state) => state.dashboard);
  const { visibleModalDetalhes } = useSelector((state) => state.visibleModal);

  const [data, setData] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  useEffect(() => {
    setVisible(visibleModalDetalhes);
  }, [visibleModalDetalhes]);

  const handleOk = () => {
    setConfirmLoading(true);
    setVisible(false);
    setConfirmLoading(false);
    dispatch(VisibleModaldetalhes(false));
  };

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data["length"] > 0) {
        const salve = aux.data[0].data;
        salve.map(
          (data, index) => contato === salve[index].name && setData(data)
        );
      }
    });
  }, [contato]);

  function formDetalhes() {
    return (
      <Form>
        <DivForm>
          <P>Nome:</P>
          <Span>{data.name}</Span>
        </DivForm>
        <DivForm>
          <P>Sobrenome:</P>
          <Span>{data.sobrenome}</Span>
        </DivForm>
        <DivForm>
          <P>Telefone:</P>
          <Span>{data.telefone}</Span>
        </DivForm>
        <DivForm>
          <P>Email:</P>
          <Span>{data.email}</Span>
        </DivForm>
        <DivForm>
          <P>Data de nascimento:</P>
          <Span>{data.dataNascimento}</Span>
        </DivForm>
        <DivForm>
          <P>Endereço:</P>
          <Span>{data.endereco}</Span>
        </DivForm>
      </Form>
    );
  }

  return (
    <>
      <Modal
        title={`Detalhes do(a) ${data.name}`}
        visible={visible}
        onCancel={handleOk}
        confirmLoading={confirmLoading}
        bodyStyle={{background: "#F0F2F5"}}
        footer={[
          <Button onClick={handleOk}>
            Ok
          </Button>
        ]}
      >
        {formDetalhes()}
      </Modal>
    </>
  );
};

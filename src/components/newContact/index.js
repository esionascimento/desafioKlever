import React, { useEffect } from 'react';
import { Modal, Form, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { VisibleModalNewContact } from '../../store/visibleModal/visibleModal.actions';
import { SalveFormContato } from '../../store/dashboard/Dashboard.actions';
import { dashboardCreate } from '../../services/fetchActions';

import { Label, DivForm, Input } from './newContactCss';

export const NewContact = () => {
  const [visible, setVisible] = React.useState(false);
  const dispatch = useDispatch();
  const { visibleModalNewContact } = useSelector((state) => state.visibleModal);
  const { functionGet } = useSelector((state) => state.dashboard);
  const [form] = Form.useForm();

  useEffect(() => {
    setVisible(visibleModalNewContact);
  }, [visibleModalNewContact]);

  const handleCancel = () => {
    setVisible(false);
    dispatch(VisibleModalNewContact(false));
  };

  const handleSubmit = (payload) => {
    dispatch(SalveFormContato(payload));
    dashboardCreate(payload).then((e) => {
      message.success(`Sucesso: ${e.data.message}`)
      functionGet();
    }).catch((err) => {
      message.error(`Erro: ${err.response.data.message}`);
    });
    setVisible(false);
    dispatch(VisibleModalNewContact(false));
  };

  function formNewContact() {
    return (
      <>
        <div>
          <Form form={form} onFinish={handleSubmit}>
            <DivForm>
                <Label>*Nome</Label>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Por favor insira o nome!' }]}
                >
                  <Input type="text" />
                </Form.Item>
            </DivForm>
            <DivForm>
            <Label>Sobrenome</Label>
                <Form.Item
                  name="sobrenome"
                  rules={[{ required: false, message: 'Por favor, insira o sobrenome!' }]}
                >
                  <Input type="text" />
                </Form.Item>
            </DivForm>
            <DivForm>
            <Label>*Celular</Label>
                <Form.Item
                  name="telefone"
                  rules={[{ required: true, message: 'Por favor, insira o numero de celular!' }]}
                >
                  <Input type="number" />
                </Form.Item>
            </DivForm>
            <DivForm>
            <Label>Data de nascimento</Label>
                <Form.Item
                  name="dataNascimento"
                  rules={[{ required: false, message: '!' }]}
                >
                  <Input type="date" />
                </Form.Item>
            </DivForm>
            <DivForm>
            <Label>Endereço</Label>
                <Form.Item
                  name="endereco"
                  rules={[{ required: false, message: '!' }]}
                >
                  <Input type="text" />
                </Form.Item>
            </DivForm>
            <DivForm>
            <Label>Email</Label>
                <Form.Item
                  name="email"
                  rules={[{ required: false, message: '!' }]}
                >
                  <Input type="text" />
                </Form.Item>
            </DivForm>
            <Button type="primary" htmlType="submit">
              Criar
            </Button>
          </Form>
        </div>
      </>
    );
  }

  return (
    <>
      <Modal
        title="Novo Contato"
        visible={visible}
        footer={false}
        onCancel={handleCancel}
      >
        {formNewContact()}
      </Modal>
    </>
  );
};

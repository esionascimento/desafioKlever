import React, { useEffect } from 'react';
import { Modal, Form, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { VisibleModalNewContact } from '../../store/visibleModal/visibleModal.actions';
import { SalveFormContato } from '../../store/dashboard/Dashboard.actions';
import { dashboardCreate } from '../../services/fetchActions';

export const NewContact = () => {
  const [visible, setVisible] = React.useState(true);
  const dispatch = useDispatch();
  const { visibleModalNewContact } = useSelector((state) => state.visibleModal);
  const [form] = Form.useForm();

  useEffect(() => {
    setVisible(visibleModalNewContact);
  }, [visibleModalNewContact]);

  const handleCancel = () => {
    setVisible(false);
    dispatch(VisibleModalNewContact(false));
  };

  
  const handleClick = (payload) => {
    dispatch(SalveFormContato(payload));
    dashboardCreate(payload);
    setVisible(false);
    dispatch(VisibleModalNewContact(false));
  };

  function formNewContact() {
    return (
      <>
        <div className="formContato">
          <Form form={form} onFinish={handleClick}>
            <div>
                <Form.Item
                  label="Nome"
                  name="nome"
                  rules={[{ required: true, message: 'Por favor insira o nome!' }]}
                >
                  <input type="text" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                  label="Sobrenome"
                  name="sobrenome"
                  rules={[{ required: false, message: 'Por favor, insira o sobrenome!' }]}
                >
                  <input type="text" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                  label="Celular"
                  name="telefone"
                  rules={[{ required: true, message: 'Por favor, insira o numero de celular!' }]}
                >
                  <input type="number" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                  label="Data de nascimento"
                  name="dataNascimento"
                  rules={[{ required: false, message: '!' }]}
                >
                  <input type="text" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                  label="Endereço"
                  name="endereco"
                  rules={[{ required: false, message: '!' }]}
                >
                  <input type="text" />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: false, message: '!' }]}
                >
                  <input type="text" />
                </Form.Item>
            </div>
            <Button type="primary" htmlType="submit">
              Salvar
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

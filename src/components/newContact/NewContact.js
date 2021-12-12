import React, { useEffect } from 'react';
import { Modal, Form, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { VisibleModalNewContact } from '../../store/visibleModal/visibleModal.actions';
import { SalveFormContato } from '../../store/dashboard/Dashboard.actions';
import { dashboardCreate } from '../../services/fetchActions';

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
    dashboardCreate(payload).then(() => {
      message.success('Sucesso: Contato criado com sucesso.')
      functionGet();
    }).catch(() => {
      message.error('Erro: criar contato');
    });
    setVisible(false);
    dispatch(VisibleModalNewContact(false));
  };

  function formNewContact() {
    return (
      <>
        <div className="formContato">
          <Form form={form} onFinish={handleSubmit}>
            <div>
                <Form.Item
                  label="Nome"
                  name="name"
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

import React, { useEffect } from 'react';
import { Modal, Form, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { VisibleModalEditar } from '../../store/visibleModal/visibleModal.actions';
import { fetchDashboard, fetchDashboardEdit } from '../../services/fetchActions';

import './editarContatoCss';
import 'antd/dist/antd.css';

export const EditarContato = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const { visibleModalEditar } = useSelector((state) => state.visibleModal);
  const { functionGet } = useSelector((state) => state.dashboard);
  const { contato } = useSelector((state) => state.dashboard);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data["length"] > 0) {
        const salve = aux.data[0].data;
        let i;
        for(i = 0; i < salve.length; i++) {
          if (salve[i].id === contato) {
            form.setFieldsValue({
              name: salve[i].name,
              sobrenome: salve[i].sobrenome !== null ? salve[i].sobrenome : "",
              telefone: Number(salve[i].telefone),
              email: salve[i].email !== null ? salve[i].email : "",
              endereco: salve[i].endereco !== null ? salve[i].endereco : "",
              dataNascimento: salve[i].dataNascimento !== null ? salve[i].dataNascimento : "",
            });
            break;
          }
        }
      }
      setVisible(visibleModalEditar);
    });
  },[form, contato, visibleModalEditar]);

  const handleSubmit = (payload) => {
    payload.contato = contato
    dispatch(VisibleModalEditar(false));
    setVisible(false);
    fetchDashboardEdit(payload).then(() => {
      message.success('Sucesso: Contato editado com sucesso.');
      functionGet();
    }).catch(() => {
      message.error('Erro: editar contato');
    });
  };

  const handleCancel = () => {
    setVisible(false);
    dispatch(VisibleModalEditar(false));
  };

  function formEditContact() {
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
        title={`Editar Contato ${contato}`}
        visible={visible}
        footer={false}
        onCancel={handleCancel}
      >
        {formEditContact()}
      </Modal>
    </>
  );
};

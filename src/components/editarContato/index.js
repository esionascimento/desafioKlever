import React, { useEffect } from 'react';
import { Modal, Form, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { VisibleModalEditar } from '../../store/visibleModal/visibleModal.actions';
import { fetchDashboard } from '../../services/fetchActions';

import './editarContatoCss';
import 'antd/dist/antd.css';

export const EditarContato = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const { visibleModalEditar } = useSelector((state) => state.visibleModal);
  const { contato } = useSelector((state) => state.dashboard);
  const [data, setData ] = React.useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data["length"] > 0) {
        const salve = aux.data[0].data;
        salve.map((data, index) => {
          if (contato === salve[index].name) {
            form.setFieldsValue({
              name: data.name,
              sobrenome: data.sobrenome !== null ? data.sobrenome : "",
              telefone: data.telefone,
              email: data.email !== null ? data.email : "",
              endereco: data.endereco !== null ? data.endereco : "",
              dataNascimento: data.dataNascimento !== null ? data.dataNascimento : "",
            });
            setData(data);
          }
          return ''
        })
      }
    });
  },[form, contato]);

  useEffect(() => {
    setVisible(visibleModalEditar);
  }, [visibleModalEditar])

  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
      dispatch(VisibleModalEditar(false));
    }, 500);
  };

  const handleClick = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
    dispatch(VisibleModalEditar(false));
  };

  function formEditContact() {
    return (
      <>
        <div className="formContato">
          <Form form={form} onFinish={handleClick}>
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
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {data && formEditContact()}
      </Modal>
    </>
  );
};

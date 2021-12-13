import React, { useEffect, useState } from "react";
import { Modal, Form, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { VisibleModalEditar } from "../../store/visibleModal/visibleModal.actions";
import {
  fetchDashboard, fetchDashboardEdit,
} from "../../services/fetchActions";

import "antd/dist/antd.css";
import { Input, DivForm, Label } from "./editarContatoCss";

export const EditarContato = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const { visibleModalEditar } = useSelector((state) => state.visibleModal);
  const { functionGet } = useSelector((state) => state.dashboard);
  const { contato } = useSelector((state) => state.dashboard);
  const [form] = Form.useForm();
  const [name, setName] = useState();

  useEffect(() => {
    fetchDashboard().then((aux) => {
      if (aux.data["length"] > 0) {
        const salve = aux.data[0].data;
        let i;
        for (i = 0; i < salve.length; i++) {
          if (salve[i].id === contato) {
            setName(salve[i].name);
            form.setFieldsValue({
              name: salve[i].name,
              sobrenome: salve[i].sobrenome !== null ? salve[i].sobrenome : "",
              telefone: Number(salve[i].telefone),
              email: salve[i].email !== null ? salve[i].email : "",
              endereco: salve[i].endereco !== null ? salve[i].endereco : "",
              dataNascimento:
                salve[i].dataNascimento !== null ? salve[i].dataNascimento : "",
            });
            break;
          }
        }
      }
      setVisible(visibleModalEditar);
    });
  }, [form, contato, visibleModalEditar]);

  const handleSubmit = (payload) => {
    payload.contato = contato;
    dispatch(VisibleModalEditar(false));
    setVisible(false);
    fetchDashboardEdit(payload)
      .then(() => {
        message.success("Sucesso: Contato editado com sucesso.");
        functionGet();
      })
      .catch(() => {
        message.error("Erro: editar contato");
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
            <DivForm>
              <Label>*Nome</Label>
              <Form.Item
                name="name"
                rules={[
                  { required: true, message: "Por favor insira o nome!" },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </DivForm>

            <DivForm>
            <Label>Sobrenome</Label>
              <Form.Item
                name="sobrenome"
                rules={[
                  {
                    required: false,
                    message: "Por favor, insira o sobrenome!",
                  },
                ]}
              >
                <Input type="text" />
              </Form.Item>
            </DivForm>

            <DivForm>
              <Label>*Celular</Label>
              <Form.Item
                name="telefone"
                rules={[
                  {
                    required: true,
                    message: "Por favor, insira o numero de celular!",
                  },
                ]}
              >
                <Input type="number" />
              </Form.Item>
            </DivForm>
            <DivForm>
              <Label>Data de nascimento</Label>
              <Form.Item
                name="dataNascimento"
                rules={[{ required: false, message: "!" }]}
              >
                <Input type="date" />
              </Form.Item>
            </DivForm>

            <DivForm>
            <Label>Endereço</Label>
              <Form.Item
                name="endereco"
                rules={[{ required: false, message: "!" }]}
              >
                <Input type="text" />
              </Form.Item>
            </DivForm>

            <DivForm>
            <Label>Email</Label>
              <Form.Item
                name="email"
                rules={[{ required: false, message: "!" }]}
              >
                <Input type="text" />
              </Form.Item>
            </DivForm>
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
        title={`Editar Contato ${name}`}
        visible={visible}
        footer={false}
        onCancel={handleCancel}
      >
        {formEditContact()}
      </Modal>
    </>
  );
};

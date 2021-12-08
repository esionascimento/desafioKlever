import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SalveFormContato } from '../../store/dashboard/Dashboard.actions';

import './criarContato.css';

export function FormContato() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    dataNascimento: '',
    endereco: '',
    email: '',
  });

  useEffect(() => {
    dispatch(SalveFormContato(form));
  }, [form, dispatch]);

  function onChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <>
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
      <p>O modal será fechado após um segundos</p>
    </>
  );
}
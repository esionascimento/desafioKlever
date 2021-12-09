import axios from 'axios';
require("dotenv").config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');

export const newCadastro = (user) => {
  axios.post(`${BASE_URL}/user`, user)
  .then((res) => {
    console.log(res.data);
  })
  .catch(console.log);
};

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'authorization': token,
  },
});

export const authenticate = (token) => APIPOST.post('/authorization', token);

export const login = (user) => APIPOST.post('/login', user);

export const fetchDashboard = () => APIPOST.get('/dashboard');

export const dashboardDelete = (contato) => {
  const aux = { nome: contato}
  APIPOST.patch('/dashboard/delete', aux)
};
export const dashboardCreate = (contato) => APIPOST.post('/dashboard/create', contato);

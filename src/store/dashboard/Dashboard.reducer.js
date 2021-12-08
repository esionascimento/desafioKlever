const INITIAL_STATE = {
  contato: -1,
  nome: '',
  sobrenome: '',
  telefone: '',
  email: '',
  dataNascimento: '',
  endereco: '',
};

export default function DashboardContato (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'CONTATO_SELECIONADO':
      return {
        ...state,
        contato: action.payload
      }
    case 'SALVE_FORM':
      return {
        ...state,
        nome: action.payload.nome, sobrenome: action.payload.sobrenome,
        telefone: action.payload.telefone, dataNascimento: action.payload.dataNascimento,
        endereco: action.payload.endereco, email: action.payload.email
      }
    default:
      return state;
  }
}

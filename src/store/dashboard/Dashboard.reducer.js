const INITIAL_STATE = {
  contato: -1,
  id: '',
  name: '',
  sobrenome: '',
  telefone: '',
  email: '',
  dataNascimento: '',
  endereco: '',
  func: () => {},
  functionGet: () => {}
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
        id: action.payload.id, name: action.payload.name, sobrenome: action.payload.sobrenome,
        telefone: action.payload.telefone, dataNascimento: action.payload.dataNascimento,
        endereco: action.payload.endereco, email: action.payload.email
      }
      case 'ATUALIZAR_GET':
        return {
          ...state,
          functionGet: action.payload
        }
    default:
      return state;
  }
}

const INITIAL_STATE = {
  visibleModalDetalhes: false,
  visibleModalNewContact: false,
  visibleModalEditar: false
};

export function VisibleModal (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'VISIBLE_MODAL_DETALHES':
      return {
        visibleModalDetalhes: action.payload
      }
    case 'VISIBLE_MODAL_NEW_CONTACT':
      return {
        visibleModalNewContact: action.payload
      }
    case 'VISIBLE_MODAL_EDITAR':
      return {
        visibleModalEditar: action.payload
      }
    default:
      return state;
  };
};

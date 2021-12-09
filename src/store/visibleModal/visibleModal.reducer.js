const INITIAL_STATE = {
  visibleModalDetalhes: false,
  visibleModalNewContact: false
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
    default:
      return state;
  };
};

const INITIAL_STATE = {
  visibleModalDetalhes: false,
};

export function VisibleModal (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'VISIBLE_MODAL_DETALHES':
      return {
        visibleModalDetalhes: action.payload
      }
    default:
      return state;
  }
}

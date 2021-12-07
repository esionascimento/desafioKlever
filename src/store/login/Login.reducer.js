const INITIAL_STATE = {
  email: '',
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'EMAIL_LOGIN':
      return {
        email: action.payload[0]
      }
    default:
      return state;
  }
}

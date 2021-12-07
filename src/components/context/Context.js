import { createContext } from 'react';

const StoreContext = createContext({
  token: null,
  setToken: null,
})

export default StoreContext;

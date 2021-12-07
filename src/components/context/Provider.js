import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const StoreProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  )
}

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export default StoreProvider;

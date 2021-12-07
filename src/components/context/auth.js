import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        token, setToken
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
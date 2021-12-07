import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../util/verifyLogin';

function LoginAuth ({ component: Component, ...rest }) {
  const [fact, setFact] = useState(false);

  useEffect(async () => {
    const data = await auth();
    if (data){
      setFact(true);
    }
  }, []);
  
  return (
    <Route
      {...rest}
      render={(props) => fact
        ? <Redirect to={{ pathname: "/dashboard", state: { from: props.location } } }/>
        : <Component {...rest} />
      }
    />
  )
}

LoginAuth.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}

export default LoginAuth;
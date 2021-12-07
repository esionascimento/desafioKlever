import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { authenticate } from '../../services/fetchActions';

function RoutesPrivate ({ component: Component, ...rest }) {
  const [fact, setFact] = useState(true);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    authenticate({token}).then(() => {
      setFact(true);
    }).catch(() => setFact(false));
  }, []);
  
  return (
    <Route
      {...rest}
      render={(props) => fact
        ? <Component {...rest} />
        : <Redirect to={{ pathname: "/not-found", state: { from: props.location } } }/>
      }
    />
  )
}

RoutesPrivate.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
}

export default RoutesPrivate;
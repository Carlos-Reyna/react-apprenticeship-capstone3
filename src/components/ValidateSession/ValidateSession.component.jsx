import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

function ValidateSession({ children }) {
  const { session } = useAppContext();

  if (session.isLogged) {
    return <div>{children}</div>;
  }
  return <Redirect to="/" />;
}

export default ValidateSession;

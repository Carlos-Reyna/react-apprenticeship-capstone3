import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { NormalButton, StyledForm, TextInput } from '../Styled/Custom.styled';
import firebaseAuth from '../../utils/firebaseAuth';
import { INVALID_LOGIN_MSG } from '../../utils/const';

function Authform() {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { setSession } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await firebaseAuth(userName, password);
      if (response === null) {
        setError(true);
      } else {
        setError(false);
        setSession({ userId: response.uid, isLogged: true });
        history.push(`/notes`);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)} title="login-form">
      <TextInput
        value={userName}
        placeholder="Enter Username"
        title="username-input"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextInput
        value={password}
        placeholder="Enter Password"
        title="password-input"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {error ? <div title="error-msg">{INVALID_LOGIN_MSG}</div> : null}
      <NormalButton width="100%" type="submit" title="login-button">
        Submit
      </NormalButton>
    </StyledForm>
  );
}

export default Authform;

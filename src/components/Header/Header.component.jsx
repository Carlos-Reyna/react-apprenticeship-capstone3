import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { TextInput, StyledSwitch } from '../Styled/Custom.styled';
import { StyledHeader } from './StyledHeader.styled';

function Header() {
  const { searchTerm, setSearchTerm, session, updateTheme } = useAppContext();
  const [mode, setMode] = useState('off');

  const handleToggle = () => {
    const nextValue = mode === 'off' ? 'on' : 'off';
    setMode(nextValue);
    const themeValue = nextValue === 'on';
    updateTheme(themeValue);
  };

  return (
    <StyledHeader>
      {session.isLogged ? (
        <TextInput
          type="text"
          placeholder="Search note"
          width="33%"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      ) : null}

      <StyledSwitch>
        <label className="switch" htmlFor="switch-input">
          <input
            type="checkbox"
            id="switch-input"
            value={mode}
            onChange={() => handleToggle()}
          />
          <span className="slider round" />
        </label>
      </StyledSwitch>
    </StyledHeader>
  );
}

export default Header;

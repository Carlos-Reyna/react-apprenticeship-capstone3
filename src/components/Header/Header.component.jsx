import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { TextInput } from '../Styled/Custom.styled';
import { StyledHeader } from './StyledHeader.styled';

function Header() {
  const { searchTerm, setSearchTerm, session } = useAppContext();
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
    </StyledHeader>
  );
}

export default Header;

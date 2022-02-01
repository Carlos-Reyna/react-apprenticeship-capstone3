import React from 'react';
import { useAppContext } from '../../context/AppContext';
import LayoutStyled from './LayoutStyled.styled';

function Layout({ children }) {
  const { themeMode } = useAppContext();

  return (
    <LayoutStyled
      backgroundColor={themeMode.layout.backgroundColor}
      fontColor={themeMode.layout.fontColor}
    >
      {children}
    </LayoutStyled>
  );
}

export default Layout;

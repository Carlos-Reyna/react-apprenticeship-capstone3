import React from 'react';
import LayoutStyled from './LayoutStyled.styled';

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;

import React from 'react';
import Authform from '../../components/Authform/Authform.component';
import { Box } from '../../components/Styled/Custom.styled';

function Landing() {
  return (
    <Box>
      <h1>Notes app</h1>
      <Authform />
    </Box>
  );
}

export default Landing;

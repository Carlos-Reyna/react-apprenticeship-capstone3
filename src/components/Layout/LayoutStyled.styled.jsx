import styled from 'styled-components';

const LayoutStyled = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  color: ${(props) => (props.fontColor ? props.fontColor : '#000')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  border: 3px;
  box-sizing: border-box;
`;

export default LayoutStyled;

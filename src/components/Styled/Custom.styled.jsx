import styled from 'styled-components';

export const Modal = styled.div`
  display: ${(props) => props.display};
  position: fixed;
  z-index: 1;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

export const ModalBody = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  background-color: #fefefe;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  line-height: 30px;

  @media (max-width: 768px) {
    margin: 0;
    padding: 5px;
    width: 98%;
    min-height: 100vh;
    line-height: 30px;
  }
`;

export const TextItem = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 600;
`;

export const TextContent = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 300;
`;

export const TextInput = styled.input`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding-bottom: 0px;
  font-size: 1.3rem;
  width: ${(props) => props.width || '100%'};
  margin: 1%;
`;

export const TextArea = styled.textarea`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding-bottom: 0px;
  font-size: 1.3rem;
  width: ${(props) => props.width || '100%'};
`;

export const NormalButton = styled.button`
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  -webkit-transition: color 100ms;
  transition: color 100ms;
  width: ${(props) => props.width || '25%'};
  margin: 2%;

  &:hover,
  &:focus {
    background-color: #f082ac;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 80%;
  margin: 10%;
  justify-content: center;
  align-items: center;
`;

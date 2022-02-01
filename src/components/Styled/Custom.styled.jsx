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
    padding: 0;
    margin: 0;
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

  @media only screen and (max-width: 600px) {
     {
      width: 90%;
      margin: 5%;
    }
  }
`;

export const TextArea = styled.textarea`
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding-bottom: 0px;
  font-size: 1.3rem;
  width: ${(props) => props.width || '100%'};

  @media only screen and (max-width: 600px) {
    {
     width:90%; 
     margin: 5%;
   } 
`;

export const NormalButton = styled.button`
  background-color: #7222F5;
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
    background-color: #7847FF;
  }

  @media only screen and (max-width: 600px) {
    {
     width:90%; 
     margin-left:5%;
   }
`;

export const StyledForm = styled.form`
 
  width: 100%;

  @media only screen and (max-width: 600px) {
    {
      flex-direction: column;
     width:100%; 
     
   }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: ${(props) => (props.minWidth ? props.minWidth : '80%')};
  margin: 10%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    {
      flex-direction: column;
     width:80%; 
     
   }

`;

export const StyledSwitch = styled.label`
   {
    margin: 1%;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #7222f5;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #7222f5;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

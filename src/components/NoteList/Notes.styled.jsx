import styled from 'styled-components';
import getColor from '../../utils/colorValidator';

const StyledNotes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-auto-rows: 100px;
  margin-top: 20px;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  text-align: initial;
`;

StyledNotes.Title = styled.div`
  width: 100%;
  margin-left: 2%;
  overflow: hidden;
  font-weight: 800;
  font-size: 1.3rem;
`;

StyledNotes.Body = styled.div`
  width: 100%;
  margin-left: 2%;
  margin-right: 2%;
  overflow: hidden;
  font-weight: 600;
  font-size: 1rem;
`;

StyledNotes.Note = styled.div`
  background-color: ${(props) => getColor(props.noteColor) || '#6E84F5'};
  color: white;
  border-radius: 10px;
`;

export default StyledNotes;

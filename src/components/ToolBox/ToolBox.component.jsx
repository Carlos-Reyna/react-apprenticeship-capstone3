import React from 'react';
import { StyledToolBox } from './StyledToolBox.styled';
import { useFireStore } from '../../hooks/useFirestore';

function ToolBox({ note, setShow, valueOnArchived, noteId }) {
  const { deleteNote, archiveNote } = useFireStore();

  const handleDelete = async () => {
    await deleteNote(noteId);
    setShow(false);
  };

  const handleArchive = async () => {
    await archiveNote({ ...note, isArchived: valueOnArchived, id: noteId });
    setShow(false);
  };

  return (
    <StyledToolBox>
      <i className="fa fa-archive" onClick={handleArchive} aria-hidden="true" />
      <i className="fa fa-times" onClick={handleDelete} aria-hidden="true" />
    </StyledToolBox>
  );
}

export default ToolBox;

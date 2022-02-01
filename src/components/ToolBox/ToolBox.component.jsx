import React from 'react';
import { StyledToolBox } from './StyledToolBox.styled';
import { useFireStore } from '../../hooks/useFirestore';

function ToolBox({ note, setShow, valueOnArchived, noteId }) {
  const { deleteNote, archiveNote } = useFireStore();

  const handleDelete = () => {
    if (noteId !== null) {
      deleteNote(noteId);
    }
    setShow(false);
  };

  const handleArchive = () => {
    archiveNote({ ...note, isArchived: valueOnArchived, id: noteId });
    setShow(false);
  };

  return (
    <StyledToolBox>
      <i
        className="fa fa-archive"
        onClick={handleArchive}
        aria-hidden="true"
        title="archive-icon"
      />
      <i
        className="fa fa-trash"
        onClick={handleDelete}
        aria-hidden="true"
        title="delete-icon"
      />
    </StyledToolBox>
  );
}

export default ToolBox;

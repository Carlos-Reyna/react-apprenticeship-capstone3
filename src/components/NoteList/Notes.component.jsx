import React, { useState } from 'react';
import NoteDialog from '../NoteDialog/NoteDialog';
import StyledNotes from './Notes.styled';

function Notes({ validNotes, valueOnArchived }) {
  const [show, setShow] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleClick = (note) => {
    setShow(true);
    setSelectedNote(note);
  };

  if (validNotes === undefined) return null;

  return (
    <StyledNotes>
      {validNotes.map((note) => (
        <StyledNotes.Note
          key={note.id}
          noteColor={note.color}
          onClick={() => handleClick(note)}
        >
          <StyledNotes.Title>{note.title}</StyledNotes.Title>

          <StyledNotes.Body>{note.text}</StyledNotes.Body>
        </StyledNotes.Note>
      ))}

      {show ? (
        <NoteDialog
          note={selectedNote}
          setShow={setShow}
          isUpdate
          valueOnArchived={valueOnArchived}
        />
      ) : null}
    </StyledNotes>
  );
}

export default Notes;

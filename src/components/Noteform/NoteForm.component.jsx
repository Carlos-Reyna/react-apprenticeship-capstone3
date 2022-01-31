import React, { useState } from 'react';
import { NormalButton, TextArea, TextInput } from '../Styled/Custom.styled';
import ToolBox from '../ToolBox/ToolBox.component';
import { useFireStore } from '../../hooks/useFirestore';

function NoteForm({ note, isUpdate, setShow, valueOnArchived }) {
  const { saveNotes, updateNote } = useFireStore();
  const [newNote, setNewNote] = useState({
    text: note.text || '',
    color: note.color || '',
    title: note.title || '',
  });

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      await updateNote({
        ...newNote,
        id: note.id,
        isArchived: note.isArchived,
      });
    } else {
      await saveNotes({ ...newNote, isArchived: false });
    }
    setShow(false);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <TextInput
        autoFocus
        width="50%"
        name="title"
        style={{ resize: 'none' }}
        placeholder="Title"
        value={newNote.title}
        onChange={(e) => handleChange(e)}
      />
      <TextInput
        width="40%"
        name="color"
        style={{ resize: 'none' }}
        placeholder="Color: #000"
        value={newNote.color}
        onChange={(e) => handleChange(e)}
      />
      <TextArea
        style={{ resize: 'none' }}
        name="text"
        placeholder="Your text goes in here"
        value={newNote.text}
        onChange={(e) => handleChange(e)}
      />
      <ToolBox
        note={newNote}
        noteId={note.id}
        setShow={setShow}
        valueOnArchived={valueOnArchived}
      />
      <NormalButton onClick={() => setShow(false)} type="button">
        Dismiss
      </NormalButton>
      <NormalButton type="submit">{isUpdate ? 'Save' : 'Close'}</NormalButton>
    </form>
  );
}

export default NoteForm;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notes from '../../components/NoteList';
import { TextArea, Box } from '../../components/Styled/Custom.styled';
import NoteDialog from '../../components/NoteDialog/NoteDialog';
import { useNotesFilter } from '../../hooks/useNotesFilter';
import { VALUE_ON_ARCHIVE } from '../../utils/const';

function NoteLanding() {
  const [show, setShow] = useState(false);

  const { filteredNotes, notesMessage } = useNotesFilter();
  return (
    <Box>
      <h1>
        Notes / <Link to="archived">Archived</Link>{' '}
      </h1>
      <TextArea
        width="100%"
        style={{ resize: 'none' }}
        placeholder="Type your note here"
        onClick={() => setShow(true)}
      />
      {show ? (
        <NoteDialog
          isUpdate={false}
          note={{}}
          setShow={setShow}
          valueOnArchived={VALUE_ON_ARCHIVE}
        />
      ) : null}

      {filteredNotes.length === 0 ? <div>{notesMessage}</div> : null}
      <Notes validNotes={filteredNotes} valueOnArchived={VALUE_ON_ARCHIVE} />
    </Box>
  );
}

export default NoteLanding;

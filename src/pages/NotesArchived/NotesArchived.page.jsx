import React from 'react';
import { Link } from 'react-router-dom';
import Notes from '../../components/Notes';
import { useNotesFilter } from '../../hooks/useNotesFilter';
import { VALUE_ON_UNARCHIVE } from '../../utils/const';
import { Box } from '../../components/Styled/Custom.styled';

function NotesArchived() {
  const { filterArchivedNotes, archivedMessage } = useNotesFilter();

  return (
    <Box>
      <h1 title="archived-header">
        Archived / <Link to="/notes">Notes</Link>{' '}
      </h1>
      {filterArchivedNotes.length === 0 ? <div>{archivedMessage}</div> : null}
      <Notes
        validNotes={filterArchivedNotes}
        valueOnArchived={VALUE_ON_UNARCHIVE}
      />
    </Box>
  );
}

export default NotesArchived;

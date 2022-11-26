import { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import {
  EMPTY_SEARCH_MSG,
  EMPTY_NOTES_MSG,
  EMPTY_ARCHIVE_MSG,
} from '../utils/const';
import { useFireStore } from './useFirestore';

function useNotesFilter() {
  const { notesArr, setNotesArr, searchTerm, session } = useAppContext();
  const { fetchNotes } = useFireStore();
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filterArchivedNotes, setFilteredArchivedNotes] = useState([]);
  const [notesMessage, setNotesMessage] = useState(EMPTY_NOTES_MSG);
  const [archivedMessage, setArchivedMessage] = useState(EMPTY_NOTES_MSG);

  useEffect(() => {
    async function requestNotes() {
      const result = await fetchNotes(session.userId);
      setNotesArr(result);
      setFilteredNotes(result);
    }

    requestNotes();
  }, []);

  useEffect(() => {
    const statusFilter = notesArr.filter((note) => note.isArchived === false);
    const statusFilterArchived = notesArr.filter(
      (note) => note.isArchived === true
    );
    if (notesArr.length !== 0 && searchTerm !== '') {
      const filterNotes = statusFilter.filter(
        (note) =>
          note.title.includes(searchTerm) || note.text.includes(searchTerm)
      );
      const filteredNotesArchived = statusFilterArchived.filter(
        (note) =>
          note.title.includes(searchTerm) || note.text.includes(searchTerm)
      );
      setFilteredNotes(filterNotes);
      setFilteredArchivedNotes(filteredNotesArchived);
    } else {
      setFilteredNotes(statusFilter);
      setFilteredArchivedNotes(statusFilterArchived);
    }
  }, [searchTerm, notesArr]);

  useEffect(() => {
    if (searchTerm !== '' && filteredNotes.length === 0) {
      setNotesMessage(EMPTY_SEARCH_MSG);
    } else {
      setNotesMessage(EMPTY_NOTES_MSG);
    }
  }, [filteredNotes]);

  useEffect(() => {
    if (searchTerm !== '' && filterArchivedNotes.length === 0) {
      setArchivedMessage(EMPTY_SEARCH_MSG);
    } else {
      setArchivedMessage(EMPTY_ARCHIVE_MSG);
    }
  }, [filterArchivedNotes]);

  return { filteredNotes, filterArchivedNotes, notesMessage, archivedMessage };
}

export { useNotesFilter };

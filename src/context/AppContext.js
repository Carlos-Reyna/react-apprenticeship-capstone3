import React, { useContext, useState } from 'react';
import { DEFAULT_USER_PROPS, EMPTY_NOTES_MSG } from '../utils/const';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [session, setSession] = useState(DEFAULT_USER_PROPS);
  const [themeMode, setThemeMode] = useState({});
  const [notesArr, setNotesArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [emptyMsg, setEmptyMsg] = useState(EMPTY_NOTES_MSG);

  const addNotes = (newNote) => {
    setNotesArr([...notesArr, newNote]);
  };

  const removeNotes = (id) => {
    const notesCopy = [...notesArr];
    const newNotes = notesCopy.filter((copy) => copy.id !== id);
    setNotesArr(newNotes);
  };

  const updateNotes = (note) => {
    const notesCopy = [...notesArr];
    const index = notesCopy.findIndex((copy) => copy.id === note.id);
    notesCopy[index] = note;
    setNotesArr(notesCopy);
  };

  const updateTheme = () => {
    setThemeMode({});
  };

  return (
    <AppContext.Provider
      value={{
        session,
        themeMode,
        notesArr,
        searchTerm,
        emptyMsg,
        addNotes,
        removeNotes,
        updateNotes,
        setNotesArr,
        updateTheme,
        setSession,
        setSearchTerm,
        setEmptyMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('Context not defined');
  }

  return context;
};

export { AppProvider, useAppContext };

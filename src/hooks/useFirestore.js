import {
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';
import { useAppContext } from '../context/AppContext';

function useFireStore() {
  const { removeNotes, updateNotes, addNotes, session } = useAppContext();

  async function fetchNotes(userId) {
    let notesArr = [];
    const notesRef = collection(db, 'Notes');
    const q = query(notesRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((el) => {
      const newObj = el.data();
      newObj.id = el.id;
      notesArr = [...notesArr, { ...newObj }];
    });

    return notesArr;
  }

  async function saveNotes(note) {
    const noteToAdd = note;
    noteToAdd.userId = session.userId;
    const docRef = await addDoc(collection(db, 'Notes'), noteToAdd);
    addNotes({ ...note, id: docRef.id });
  }

  async function updateNote(note) {
    const noteToUpdate = note;
    noteToUpdate.userId = session.userId;

    updateNotes(noteToUpdate);
    const docRef = doc(db, 'Notes', note.id);
    await setDoc(docRef, {
      ...noteToUpdate,
    });
  }

  function archiveNote(note) {
    if (note.id !== undefined) {
      updateNote(note);
    } else {
      const safeNote = {
        text: note.text,
        title: note.title,
        color: note.color,
        isArchived: true,
      };
      saveNotes(safeNote);
    }
  }

  async function deleteNote(id) {
    removeNotes(id);
    await deleteDoc(doc(db, 'Notes', id));
  }

  return { updateNote, saveNotes, deleteNote, archiveNote, fetchNotes };
}

export { useFireStore };

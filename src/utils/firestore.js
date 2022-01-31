import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function fetchNotes(userId) {
  let notesArr = [];
  const notesRef = collection(db, 'Notes');
  const q = query(notesRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const newObj = doc.data();
    newObj.id = doc.id;
    notesArr = [...notesArr, { ...newObj }];
  });

  return notesArr;
}

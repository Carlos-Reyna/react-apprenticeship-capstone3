import { render, fireEvent, waitFor } from '@testing-library/react';
import { VALUE_ON_ARCHIVE } from '../utils/const';
import NoteForm from '../components/Noteform';
import { AppContext } from '../context/AppContext';

const note = {};
const isUpdate = false;
let show = false;
const setShow = () => {
  show = !show;
};
const valueOnArchived = VALUE_ON_ARCHIVE;
let mockNotes = [];
const mockSession = { userId: '', isLogged: true };

const setNotesArr = (newNote) => {
  let aux = mockNotes;
  aux = [...mockNotes, newNote];
  mockNotes = aux;
};

// const [notesArr, setNotesArr] = useState([]);
const addNotes = async (newNote) => {
  setNotesArr(newNote);
};

describe('Note form test', () => {
  test('Note form renders', () => {
    render(
      <AppContext.Provider value={{}}>
        <NoteForm
          note={note}
          isUpdate={isUpdate}
          setShow={setShow}
          valueOnArchived={valueOnArchived}
        />
      </AppContext.Provider>
    );
  });

  test('Note creation', async () => {
    const { getByTitle } = render(
      <AppContext.Provider value={{ session: mockSession, addNotes }}>
        <NoteForm
          note={note}
          isUpdate={isUpdate}
          setShow={setShow}
          valueOnArchived={valueOnArchived}
        />
      </AppContext.Provider>
    );
    const titleInput = getByTitle('title-input');
    const textInput = getByTitle('text-input');
    const colorInput = getByTitle('color-input');
    const noteForm = getByTitle('note-form');
    fireEvent.change(titleInput, { target: { value: 'new title' } });
    fireEvent.change(textInput, { target: { value: 'new text' } });
    fireEvent.change(colorInput, { target: { value: '#af9' } });

    await waitFor(async () => {
      await fireEvent.submit(noteForm);
    });

    setTimeout(() => {
      expect(mockNotes.length).not.toEqual(0);
    }, 5000);
  });
});

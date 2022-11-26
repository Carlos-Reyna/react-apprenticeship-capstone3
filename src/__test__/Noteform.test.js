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

const updateNotes = async (newNote) => newNote;

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

  test('Note Update', async () => {
    const noteToUpdate = {
      title: 'note',
      text: 'updated',
      color: '000',
      id: 'kzSvKFadGzF9nk0t56og',
      isArchived: false,
    };
    const { getByTitle } = render(
      <AppContext.Provider
        value={{ session: mockSession, addNotes, updateNotes }}
      >
        <NoteForm
          note={noteToUpdate}
          isUpdate
          setShow={setShow}
          valueOnArchived={valueOnArchived}
        />
      </AppContext.Provider>
    );
    const titleInput = getByTitle('title-input');
    const textInput = getByTitle('text-input');
    const colorInput = getByTitle('color-input');
    const noteForm = getByTitle('note-form');
    fireEvent.change(titleInput, { target: { value: 'new title update' } });
    fireEvent.change(textInput, { target: { value: 'new text update' } });
    fireEvent.change(colorInput, { target: { value: '#af9' } });

    await waitFor(async () => {
      await fireEvent.submit(noteForm);
    });

    setTimeout(() => {
      expect(noteToUpdate.title).toMatch('new title update');
    }, 5000);
  });

  test('Note Archive', async () => {
    const noteToUpdate = {
      title: 'note',
      text: 'updated',
      color: '000',
      id: 'kzSvKFadGzF9nk0t56og',
      isArchived: false,
    };
    const { getByTitle } = render(
      <AppContext.Provider
        value={{ session: mockSession, addNotes, updateNotes }}
      >
        <NoteForm
          note={noteToUpdate}
          isUpdate
          setShow={setShow}
          valueOnArchived={valueOnArchived}
        />
      </AppContext.Provider>
    );
    const titleInput = getByTitle('title-input');
    const textInput = getByTitle('text-input');
    const colorInput = getByTitle('color-input');
    const archiveIcon = getByTitle('archive-icon');
    fireEvent.change(titleInput, { target: { value: 'new title' } });
    fireEvent.change(textInput, { target: { value: 'new text' } });
    fireEvent.change(colorInput, { target: { value: '#af9' } });

    await waitFor(async () => {
      await fireEvent.click(archiveIcon);
    });

    setTimeout(() => {
      expect(noteToUpdate.isArchived).toMatch(true);
    }, 5000);
  });
});

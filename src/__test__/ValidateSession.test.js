import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ValidateSession from '../components/ValidateSession';
import NoteLanding from '../pages/NotesLanding/NoteLanding.page';
import NotesArchived from '../pages/NotesArchived/NotesArchived.page';

const mockSession = { userId: '', isLogged: false };

beforeEach(() => {
  let portalRoot = document.getElementById('modal');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal');
    document.body.appendChild(portalRoot);
  }
});

describe('Test for routing', () => {
  test('Route rendering', async () => {
    const { queryByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={{ session: mockSession }}>
          <ValidateSession>
            <NotesArchived />
          </ValidateSession>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const text = await queryByTitle('archived-header');
    expect(text).not.toBeInTheDocument();
  });

  test('Route rendering', async () => {
    const { queryByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={{ session: mockSession }}>
          <ValidateSession>
            <NoteLanding />
          </ValidateSession>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const text = await queryByTitle('notes-header');
    expect(text).not.toBeInTheDocument();
  });
});

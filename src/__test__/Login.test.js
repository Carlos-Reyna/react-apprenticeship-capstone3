import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../pages/Landing/Landing.page';
import { AppContext } from '../context/AppContext';
import { INVALID_LOGIN_MSG } from '../utils/const';

beforeEach(() => {
  let portalRoot = document.getElementById('modal');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'modal');
    document.body.appendChild(portalRoot);
  }
});

describe('Login page test', () => {
  test('Component renders', () => {
    render(
      <AppContext.Provider value={{}}>
        <Landing />
      </AppContext.Provider>
    );
  });

  test('Unsuccessful login', async () => {
    const { getByTitle, findByText } = render(
      <MemoryRouter>
        <AppContext.Provider value={{}}>
          <Landing />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userInput = getByTitle('username-input');
    const passwordInput = getByTitle('password-input');
    const loginForm = getByTitle('login-form');
    fireEvent.change(userInput, { target: { value: 'wizeline@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    await waitFor(async () => {
      fireEvent.submit(loginForm);
    });

    const errorMsg = await findByText(INVALID_LOGIN_MSG);
    expect(errorMsg).toBeInTheDocument();
  });

  test('Unsuccessful login', async () => {
    const { getByTitle, findByText } = render(
      <MemoryRouter>
        <AppContext.Provider value={{}}>
          <Landing />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userInput = getByTitle('username-input');
    const passwordInput = getByTitle('password-input');
    const loginForm = getByTitle('login-form');
    fireEvent.change(userInput, { target: { value: 'wizeline@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    await waitFor(async () => {
      fireEvent.submit(loginForm);
    });

    const errorMsg = await findByText(INVALID_LOGIN_MSG);
    expect(errorMsg).toBeInTheDocument();
  });

  test('Successful login', async () => {
    const { getByTitle, findByTitle } = render(
      <MemoryRouter>
        <AppContext.Provider value={{}}>
          <Landing />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const userInput = getByTitle('username-input');
    const passwordInput = getByTitle('password-input');
    const loginForm = getByTitle('login-form');
    fireEvent.change(userInput, { target: { value: 'Sample@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    waitFor(async () => {
      fireEvent.submit(loginForm);
      const errorMsg = await findByTitle('error-msg');
      expect(errorMsg).not.toBeInTheDocument();
    });
  });
});

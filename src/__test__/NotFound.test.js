import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NotFound from '../pages/NotFound/NotFound.page';

describe('Not found page test', () => {
  const history = createMemoryHistory();
  test('Component rendered', () => {
    render(
      <Router history={history}>
        <NotFound />
      </Router>
    );
  });

  test('Login link', () => {
    const { getByTitle } = render(
      <Router history={history}>
        <NotFound />
      </Router>
    );

    const loginLink = getByTitle('login-link');

    expect(loginLink).toBeInTheDocument();
  });
});

/*eslint-disable */
import firebase from '../../utils/firebaseConfig';
/* eslint-enable */
import {
  BrowserRouter,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom';
import Layout from '../Layout';
import Landing from '../../pages/Landing/Landing.page';
import NoteLanding from '../../pages/NotesLanding/NoteLanding.page';
import { AppProvider } from '../../context/AppContext';
import Header from '../Header';
import NotesArchived from '../../pages/NotesArchived/NotesArchived.page';
import ValidateSession from '../ValidateSession';
import NotFound from '../../pages/NotFound/NotFound.page';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Header />
          <Switch>
            <Route path="/notes">
              <ValidateSession>
                <NoteLanding />
              </ValidateSession>
            </Route>

            <Route path="/archived">
              <ValidateSession>
                <NotesArchived />
              </ValidateSession>
            </Route>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

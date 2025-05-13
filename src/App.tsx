import { RawIntlProvider } from 'react-intl';
import { intl } from './utils/intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from './constants/app.routes';
import { withRedirect } from './hoc/withRedirect';
import Repositories from './pages/Repositories/Repositories';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <RawIntlProvider value={intl}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTES.home} Component={withRedirect(Home)} />
          <Route
            path={APP_ROUTES.register}
            Component={withRedirect(Register)}
          />
          <Route
            path={APP_ROUTES.repositories}
            Component={withRedirect(Repositories)}
          />
        </Routes>
      </BrowserRouter>
    </RawIntlProvider>
  );
}

export default App;

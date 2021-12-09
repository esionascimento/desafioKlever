import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import RoutesPrivate from './services/Private/Private';

import Home from './pages/Home/index.js'
import Cadastro from './components/cadastro'
import Dashboard from './pages/Dashboard/index.js';
import { NotFound } from './pages/NotFound/NotFound.js';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <RoutesPrivate exact path="/dashboard" component={Dashboard} />
            <Route exact path="/cadastro" component={() => <Cadastro />} />
            <Route exact path="/not-found" component={() => <NotFound />} />
          </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

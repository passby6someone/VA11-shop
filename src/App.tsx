import React from 'react';
// import { Route } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { Provider } from 'react-redux';

import { basename, store } from './config/config';
import Loading from './components/Loading';

const MainPage = loadable(() => import('./views/MainPage'), {
  fallback: <Loading />,
});

const ItemPage = loadable(() => import('./views/ItemPage/ItemPage'), {
  fallback: <Loading />,
});

function App():JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Switch>
          <Route path="/item">
            <ItemPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

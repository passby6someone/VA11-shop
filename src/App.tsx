import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';
import { Provider } from 'react-redux';

import { basename, store } from './config/config';
import Loading from './components/Loading';

// const Hello = loadable(() =>
// import('./components/Hello') as unknown as Promise<DefaultComponent<unknown>>, {
//   fallback: <Loading />,
// });
const IndexPage = loadable(() => import('./views/IndexPage/IndexPage') as unknown as Promise<DefaultComponent<unknown>>, {
  fallback: <Loading />,
});

function App():JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Route path="/" component={IndexPage} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

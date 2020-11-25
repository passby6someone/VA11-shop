import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import loadable, { DefaultComponent } from '@loadable/component';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import VA11ShopApp from './redux/reducer/reducer';
import Loading from './components/Loading';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const store = createStore(VA11ShopApp, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Hello = loadable(() => import('./components/Hello') as unknown as Promise<DefaultComponent<unknown>>, {
  fallback: <Loading />,
});

const basename = process.env.NODE_ENV === 'production' ? '/VA11-shop' : '/';

function App():JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <Route path="/" component={Hello} />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

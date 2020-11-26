import { createStore } from 'redux';
import VA11ShopApp from '@reducer/reducer';

function storeAdapter() {
  if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    return createStore(VA11ShopApp, process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return createStore(VA11ShopApp);
}

export const store = storeAdapter();

export const basename = process.env.NODE_ENV === 'production' ? '/VA11-shop' : '/';

import { combineReducers } from 'redux';

import { INIT, InitAction } from '@actions/actions';
import { Store } from '@store/store';

const initStore: Store = {
  init: {
    text: 'test',
  },
};

export function init(state = initStore, action: InitAction): Store {
  if (action.type === INIT) {
    const o = {
      text: action.text,
    };
    return { ...state, ...o };
  }
  return state;
}

const VA11ShopApp = combineReducers({
  init,
});

export default VA11ShopApp;

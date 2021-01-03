import { combineReducers } from 'redux';

import {
  INIT,
  InitAction,
  Init,
  CHANGE_TAB,
  TabAction,
  TabName,
  Tab,
} from '@actions/actions';
import { Store } from '@store/store';

const initStore: Store = {
  init: {
    text: 'test',
  },
  tab: {
    TabName: TabName.index,
  },
};

export function init(state = initStore.init, action: InitAction): Init {
  if (action.type === INIT) {
    const o = {
      text: action.text,
    };
    return { ...state, ...o };
  }
  return state;
}

export function tab(state = initStore.tab, action: TabAction): Tab {
  if (action.type === CHANGE_TAB) {
    const { TabName: name } = action;
    return { ...state, ...{ TabName: name } };
  }
  return state;
}

const VA11ShopApp = combineReducers({
  init,
  tab,
});

export default VA11ShopApp;

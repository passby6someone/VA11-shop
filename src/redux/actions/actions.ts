export const INIT = 'INIT';

export interface Init {
  text: string
}

export interface InitAction extends Init {
  type: string
}

export function init(text:string):InitAction {
  return { type: INIT, text };
}

export const CHANGE_TAB = 'CHANGE_TAB';

export type TabName = 'index' | 'message' | 'me';

export interface Tab {
  TabName: TabName
}

export interface TabAction extends Tab {
  type: 'CHANGE_TAB'
}

export const changeTab = (changedName: TabName): TabAction => ({
  type: CHANGE_TAB,
  TabName: changedName,
});

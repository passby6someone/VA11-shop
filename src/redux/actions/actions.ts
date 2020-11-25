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

import { proxy } from 'valtio';

export enum Actions {
  GET_BEARER = 'get-bearer',
  GET_STATE = 'get-state',
  SET_STATE = 'set-state',
}
export type Action = `${Actions}`;

export const state = proxy({
  isCaptionModalEnabled: false,
  isChatExportEnabled: false,
  isPromptSavingEnabled: false,
});

export type ExtensionState = typeof state;

export const updateState = (payload: Partial<typeof state>) => {
  chrome.runtime.sendMessage({ type: Actions.SET_STATE, payload });
};

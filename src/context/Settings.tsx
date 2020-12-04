import React, { createContext, useContext, useReducer } from 'react';

type State = {
  theme: string;
};

type ActionType = {
  type: 'changeTheme';
  theme: string;
};

const availableThemes = ['light', 'dark'];
const isValidTheme = (theme: string) => availableThemes.includes(theme);

type Dispatch = (action: ActionType) => void;

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState = {
  theme: 'dark',
};

const stateReducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'changeTheme': {
      let theme = 'dark';
      if (isValidTheme(action.theme)) {
        theme = action.theme;
      }
      localStorage.setItem('theme', theme);
      return { ...state, theme };
    }
    default:
      return initialState;
  }
};

const SettingsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

const useSettingsState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useSettingsState must be used within a SettingsProvider');
  }
  return context;
};

const useSettingsDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error(
      'useSettingsDispatch must be used within a SettingsProvider'
    );
  }
  return context;
};

export { SettingsProvider, useSettingsState, useSettingsDispatch };

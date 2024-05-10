import React, { useState, createContext, useContext } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    todos: [],
  });

  const set = (data) => {
    setGlobalState((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, set }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

import React, { createContext, useState, useContext } from 'react';

interface IAppContext {
  clickedExplore: boolean;
  setClickedExplore?: any;
}

const defaultState = {
  clickedExplore: false
};

export const AppContext = createContext<IAppContext>(defaultState);

const AppContextProvider = (props: any) => {
  const [clickedExplore, setClickedExplore] = useState(defaultState.clickedExplore);

  return (
    <AppContext.Provider
      value={{
        clickedExplore,
        setClickedExplore
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
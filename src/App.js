import './App.css';
import React from 'react';
import Header from './components/Header'
import Characters from './components/Characters'
import useInitialState from './hooks/useInitialState';
import AppContext from './context/AppContext';
function App() {
  const initialState = useInitialState();
  const { darkMode } = initialState.state;
  

  return (
    <div className={darkMode ? ' App dark' : 'App ligth'}>
      <AppContext.Provider value={initialState}>
        <Header />
        <Characters />
      </AppContext.Provider>
    </div>
  );
}

export default App;

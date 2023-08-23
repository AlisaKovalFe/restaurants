import './styles/App.css';
import { useReducer, useEffect } from 'react'
import { globalContext as GlobalContext } from './context/globalContext'
import { reducer } from './reducers//reducer'
import { restaurants } from './data/restaurants'

import { initializer } from './hooks/useLS'
import Header from './views/Header/Header';
import Main from './views/Main/Main'
import Footer from './views/Footer/Footer';

function App() {
  const initialState = restaurants
  const [state, dispatch] = useReducer(reducer, initializer(initialState, 'restaurants')
);
  useEffect(() => {
    localStorage.setItem('restaurants', JSON.stringify(state));
  }, [state]);

  return (
    <div className="App">
      <GlobalContext.Provider value={{state, dispatch}}>
        <Header/>
        <Main/>
        <Footer/>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

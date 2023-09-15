import './styles/App.css';
import { useReducer, useEffect } from 'react'
import { globalContext as GlobalContext } from './context/globalContext'
import { reducer } from './reducers//reducer'

import { initializer } from './hooks/useLS'
import Header from './views/Header/Header';
import Main from './views/Main/Main'
import Footer from './views/Footer/Footer';

function App() {
  const initialState = {
    list: []
  }

  const [state, dispatch] = useReducer(reducer, initializer(initialState, 'restaurants'));

  const getRestaurants = (restaurants) => {
    dispatch({
      type: 'GET_RESTAURANTS',
      payload: {
        restaurants
      }
    })
  }

  useEffect(() => {
    fetch('http://localhost:4000/restaurants')
      .then((res) => res.json())
      .then((res) => getRestaurants(res))
  }, [])

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

import './styles/App.css';
import { useReducer, useEffect } from 'react'
import { globalContext as GlobalContext } from './context/globalContext'
import { reducer } from './reducers/reducer'
import { initializer } from './hooks/useLS'
import Header from './views/Header/Header';
import Main from './views/Main/Main'
import Footer from './views/Footer/Footer';
import axios from 'axios'

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
    axios.get('http://localhost:4000/restaurants')
      .then((res) => getRestaurants(res.data))
  }, [])
  
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

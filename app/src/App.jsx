import './styles/App.css';
import { useReducer } from 'react'
import { globalContext as GlobalContext } from './context/globalContext'
import { reducer } from './reducers/reducer'
import Header from './views/Header/Header';
import Main from './views/Main/Main'
import Footer from './views/Footer/Footer';

function App() {
  const initialState = {
    list: []
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  
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

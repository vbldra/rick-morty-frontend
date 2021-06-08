import logo from './logo.svg';
import './App.css';
import React, { useReducer, useEffect } from 'react'
import { Button } from '@material-ui/core'
import { Route, NavLink } from "react-router-dom";

/** COMPONENTS */
import Characters from './components/Characters'
import Collection from './components/Collection'

export const charactersContext = React.createContext(null)

function updateCharacters(collected, randomCharacters) {
  if(collected.length && randomCharacters.length) {
    console.log("both loaded")
    randomCharacters = randomCharacters.map(it => {
        if(collected.find(c => c.id == it.id)) {
            it.collected = true
        }
        return it
    })
  }
  return {collected, randomCharacters}
}

function App() {
  const charactersReducer = (state, action) => {
    switch (action.type) {
      case 'resetCollection':
        return updateCharacters(action.payload, state.randomCharacters)

      case 'setRandomCharacters':
        return updateCharacters(state.collected, action.payload)
    
      default:
        return state
    }
  }

  // test

  const [characters, dispatch] = useReducer(charactersReducer, {
      randomCharacters: [],
      collected: []
  })

  useEffect(() => {
    async function loadCharacters() {
      const res = await fetch('/characters')
      const data = await res.json()
      dispatch({type: 'setRandomCharacters', payload: data})
    }
    async function loadCollection() {
      const res = await fetch('/characters/collection')
      const data = await res.json()
      dispatch({type: 'resetCollection', payload: data})
    }
    loadCharacters()
    loadCollection()
  }, [])

  return (
    <charactersContext.Provider value={{characters, dispatch}}>
      <div className="App">
        <div>
          <Button component={NavLink} to="/">Home</Button>
          <Button component={NavLink} to="/collection">Collection</Button>
        </div>
        <Route path="/" exact>
          <Characters />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
      </div>
    </charactersContext.Provider>
  );
}

export default App;

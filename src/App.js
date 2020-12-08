import React, { useState } from 'react';
import Intro from './components/Intro';
import Home from './components/Home';
import Intermission from './components/Intermission';

function App() {
  // [state]
  const initState = {
    isLoaded: false,
    isScrolled: false,
    isFinished: false,
    isIntermissionVisible: false,
  };
  const [state, setState] = useState(initState);
  
  // [methods]
  function stateReducer(stateItem, value) {
    const updatedState = (state) => {
      const newState = { ...state };
      newState[stateItem] = value;
      return newState;
    }
    setState(state => updatedState(state));
  }

  return (
    <div className="App">
      { !state.isFinished &&
        <Intro
          state={state}
          stateReducer={stateReducer} />
      }
      { state.isFinished && 
        <Home />
      }
      { state.isIntermissionVisible &&
        <Intermission
          stateReducer={stateReducer} />
      }
      
    </div>
  )
}

export default App;
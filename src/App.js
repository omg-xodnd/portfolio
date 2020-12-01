import React, { useState } from 'react';
import Intro from './components/Intro';
import Home from './components/Home';

function App() {
  const [isIntroLoaded, setIntroLoaded] = useState(false);
  const [isIntroEnded, setIntroEnded] = useState(false);

  return (
    <div className="App">
      { !isIntroEnded &&
        <Intro 
          state={{ isIntroLoaded }} 
          methods={{ setIntroLoaded }} />
      }
      { isIntroLoaded && 
        <Home 
          state={{ isIntroEnded }}
          methods={{ setIntroEnded }} />
      }
    </div>
  )
}

export default App;
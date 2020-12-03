import React, { useEffect, useRef } from 'react';
import { sleep } from '../util';
import './Intermission.scss';

function Intermission({ stateReducer }) {
  const setStateRef = useRef(stateReducer);
  const setState = () => setStateRef.current;

  useEffect(() => {
    (async () => {
      await sleep(1000);
      setState('isIntermissionVisible', false);
    })();
  }, []);
  
  return (
    <div className="intermission"></div>
  );
}

export default Intermission;
// custom hook for inputs
import { useState } from 'react';

function useInputState(value) {
  const [state, setState] = useState(value);

  const updateState = (evt) => {
    setState(evt.target.value);
  }

  const reset = () => {
    setState('');
  }

  return [state, updateState, reset];
}

export default useInputState;

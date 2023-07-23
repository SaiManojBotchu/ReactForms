// implementation of Form using custom hooks
import React from 'react';
import useInputState from './useInputState';

function FormHook() {
  const [name, setName, resetName] = useInputState('');

  const handleSubmit = (evt) => {
    evt.preventDefault()
    alert(`You typed : ${name}`);
    resetName();
  }
  
  return (
    <div>
      <h1>FormHook Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name2'>Name : </label>
        <input id='name2' value={name} onChange={setName} autoComplete='off' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormHook;

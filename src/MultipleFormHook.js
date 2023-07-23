// implementation of MultipleForm using custome hooks
import React from 'react';
import useInputState from './useInputState';

function MultipleFormHooks() {
  const [name, setName, resetName] = useInputState('');
  const [age, setAge, resetAge] = useInputState(0);
  const [gender, setGender, resetGender] = useInputState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(name, age, gender);
    resetName();
    resetAge();
    resetGender();
  };

  return (
    <div>
      <h1>MultipleFormHooks Demo</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={setName} />
        <input value={age} onChange={setAge} />
        <input value={gender} onChange={setGender} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default MultipleFormHooks;

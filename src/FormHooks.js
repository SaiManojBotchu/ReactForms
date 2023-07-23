// functional implementation of Form.js
import React, { useState } from 'react';

function FormHooks() {
  const [name, setName] = useState('');

  const handleChange = (evt) => {
    setName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`you typed : ${name}`);
    setName('');
  };

  return (
    <div>
      <h1>FormHooks Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name1'>Name : </label>
        <input id='name1' value={name} onChange={handleChange} autoComplete='off' />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormHooks;

import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ name: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.name}`);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <label htmlFor='name'>Name</label>
        <form onSubmit={this.handleSubmit}>
          <input
            id='name'
            name='name'
            value={this.state.name}
            placeholder='name'
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;

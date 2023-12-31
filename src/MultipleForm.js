import React, { Component } from 'react';

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: 0, gender: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    // console.log(evt.target.name, typeof evt.target.name);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.name, this.state.age, this.state.gender);
    this.setState({ name: '', age: 0, gender: '' });
  }

  render() {
    return (
      <div>
        <h1>Multiple Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id='name'
            name='name'
            value={this.state.name}
            placeholder='name'
            onChange={this.handleChange}
            autoComplete='off'
          />
          <input
            id='age'
            name='age'
            value={this.state.age}
            placeholder='age'
            onChange={this.handleChange}
            autoComplete='off'
          />
          <input
            id='gender'
            name='gender'
            value={this.state.gender}
            placeholder='gender'
            onChange={this.handleChange}
            autoComplete='off'
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default MultipleForm;

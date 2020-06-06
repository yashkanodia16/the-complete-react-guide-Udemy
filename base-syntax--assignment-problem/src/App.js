import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';
import ValidationComponent  from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    username: "Yash Kanodia",
    userInput: '',
    id: ''
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  inputLengthHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({ userInput: updateText});
  }

  render() {
    const style1 = {
      margin: 'auto',
      border: '1px solid blanchedalmond',
      boxShadow: '0 2px 3px blanchedalmond',
      padding: '16px',
      textAlign: 'center',
      textColor: 'blue',
  };
  const charList = this.state.userInput.split('').map((ch, index) => {
    return <CharComponent 
    click={() => this.deleteCharHandler(index)} 
    character={ch}
    key={index} />;
  });
  return(
      <div className = "App" >
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username} />
      <UserInput  changed={this.nameChangeHandler} username={this.state.username} style1={style1} />
      <input type="text" 
      onChange={this.inputLengthHandler}
      value={this.state.userInput}></input>
      <p>{this.state.userInput}</p>
      <ValidationComponent validate={this.state.userInput.length} />
      {charList} 
      </div>
    );
  }
}

export default App;

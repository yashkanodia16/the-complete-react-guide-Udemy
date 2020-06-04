import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {
    username: "Yash Kanodia"
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style1 = {
      margin: 'auto',
      border: '1px solid blanchedalmond',
      boxShadow: '0 2px 3px blanchedalmond',
      padding: '16px',
      textAlign: 'center',
      textColor: 'blue',
  }
  return(
      <div className = "App" >
      <UserOutput username={this.state.username} />
      <UserOutput username={this.state.username} />
      <UserInput  changed={this.nameChangeHandler} username={this.state.username} style1={style1} />
      </div>
    );
  }
}

export default App;

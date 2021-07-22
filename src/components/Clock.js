import React from 'react';
import './App.css';
import { getRandomInt,user } from './User.js';
class Clock extends React.Component {
    constructor(props) {
      super(props);
        this.state = {date: new Date()};
      }
  
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000);
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
        <div>
          <h1>Buenos dias, {user.author.names[getRandomInt(0,4)]}</h1>
          <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;
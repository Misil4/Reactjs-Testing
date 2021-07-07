
import logo from './logo.svg';
import './App.css';
import React from 'react';
const  user = {
  date: new Date(),
  text: 'Mejores pilotos de la f1',
  author: {
    names: ['button','alonso','barrichelo'],
    ages: [43,39,50]
  }
}
class MESSAGE extends React.Component {
  
  constructor(props) {
  super(props);
  }
  click() {
  }
  render() {
      return (
        <div>
          <header>
            This is my website!
          </header>
    
          <main>
          <>
      <div className="Box">{<Clock/>} tiene usted {user.author.ages[1]} años
      </div><div className="Nav"><Nav /><button className="register" onClick="click()">Register</button></div></>
            {this.props.children}
          </main>
    
          <footer>
            Your copyright message
          </footer>
        </div>
    )
  }
}
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: ['Inicio','Historia','Tienda','Ver mas']
    }
  }
  render() {
    return (
       <ul>{this.state.nav.map((menu) =><li key={menu}> {menu} </li>)}</ul>
    )
  }
}
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
        <h1>Buenos dias, {user.author.names[1]}</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
// You can choose your kind of history here (e.g. browserHistory)
// Your routes.js file
export default MESSAGE;

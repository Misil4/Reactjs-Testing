import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
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
  render() {
    return (<>
      <div className="Box">{<Clock/>} tiene usted {user.author.ages[1]} años
      </div><div className="Nav"><Nav /><button className="register">Register</button></div></>
    )
  }
}
class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <li>
        <ul>Inicio</ul>
        <ul>Historia</ul>
        <ul>Tienda</ul>
        <ul>Ver mas</ul>
        </li>
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
ReactDOM.render(
  <MESSAGE />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';
import { Router, hashHistory as history } from 'react-router-dom';
import routes from './routes/routes';
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
<Link to="/some/where">Click me</Link>
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

ReactDOM.render(
  <Router routes={routes} history={history} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default MESSAGE;

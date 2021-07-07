import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
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
  this.state = {
    date: new Date()
  }
  this.click = this.click.bind(this);
  }
  click() {
  }
  render() {
      return (
        <div>
          <header>
          </header>
    
          <main>
          <>
      <div className="Box">{<Clock/>} tiene usted {user.author.ages[1]} años
      </div><div className="Nav"><Nav /><Link to="/index.html">Register</Link></div></>
            {this.props.children}
          </main>
    
          <footer>
            Copyright {user.author.names[0]} |{this.state.date.getFullYear()}
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
const lista = {
  hoy: ['Cocinar','Dormir','Deporte'],
  mañana: ['Programar','Comer','Jugar']
}
class Historia extends React.Component {
    render() {
    return (
      <div>
        <h1>Hoy</h1><br />
        <ul>
          {lista.hoy.map((lista) =><li key={lista}>{lista}</li>)}
        </ul>
        <h1>Mañana</h1><br />
        <ul>
        {lista.mañana.map((lista)=><li key={lista}>{lista}</li>)}
        </ul>
      </div>
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
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/clock">
            <Historia/>
          </Route>
          <Route path="/">
            <MESSAGE />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

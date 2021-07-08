import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
const  user = {
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
}
  render() {
      return (
        <div>
          <header>
          </header>
    
          <main>
          <>
      <div className="Box">{<Clock/>} tiene usted {user.author.ages[1]} años
      </div><div className="Nav"><Nav /><Link to="/register">Register</Link><Text /></div></>
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
       <ul>{this.state.nav.map((menu) =><li key={menu}><Link to={menu}>{menu}</Link></li>)}</ul>
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
  class Title extends React.Component {
    render() {
      return (
        <div className="App-logo">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="200rem" height="200rem" alt=""></img>
        </div>
      );
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
class Text extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          text: "Occaecat sint veniam fugiat irure exercitation quis officia cillum eiusmod aliqua exercitation nostrud aute deserunt. Officia est do cillum et amet adipisicing esse pariatur qui veniam tempor. Eiusmod consequat nisi do qui duis commodo proident pariatur proident ipsum sit."
        }
      }
      render() {
        return (
          <div className="text">
            <h1>Bienvenido a nuestra nueva pagina web</h1><br />
            <p>{this.state.text}</p><br />
            <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/06/22/5fa4335996cdf.jpeg" height="auto" width="auto" id="img" alt="Hola"></img>
          </div>
        );
      }
}
export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clock">Clock</Link>
            </li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/Inicio">
            <MESSAGE/>
          </Route>
          <Route path="/Historia">
            <Title />
          </Route>
          <Route path="/Tienda">
            <Historia />
          </Route>
          <Route path="/Ver mas">
            <Nav />
          </Route>
          <Route path="/">
            <MESSAGE />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

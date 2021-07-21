import './App.css';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const  user = {
  text: 'Barca',
  author: {
    names: ['Pique','Messi','Busquets','Jordi'],
    ages: [34,34,33,32]
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
      <div className="Box">{<Clock/>} tiene usted {user.author.ages[getRandomInt(0,4)]} años
      </div><div className="Nav"><Nav /><Text /></div></>
            {this.props.children}
          </main>
    
          <footer>
            Copyright {user.author.names[getRandomInt(0,4)]} {this.state.date.getFullYear()}
          </footer>
        </div>
    )
  }
}
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: ['Inicio','Historia','Tienda','Ver mas','Calculator',"Canva"]
    }
  }
  render() {
    return (
       <ul>{this.state.nav.map((menu) =><Button variant="primary" key={menu}><Link to={menu}>{menu}</Link></Button>)}</ul>
    )
  }
}
const lista = {
  hoy: ['Cocinar','Dormir','Deporte'],
  mañana: ['Programar','Comer','Jugar'],
  pasado: ['Pagar','Estudiar','Descansar']
}
class Historia extends React.Component {
    render() {
    return (
      <div>
        <Nav />
        <h1><b>Hoy</b></h1><br />
        <ul>
          {lista.hoy.map((lista) =><li key={lista}>{lista}</li>)}
        </ul>
        <h1><b>Mañana</b></h1><br />
        <ul>
        {lista.mañana.map((lista)=><li key={lista}>{lista}</li>)}
        </ul>
        <h1><b>Pasado</b></h1><br />
        <ul>{lista.pasado.map((lista) =><li key={lista}>{lista}</li>)}
        </ul>
      </div>
    )
    }
  }
  class Title extends React.Component {
    render() {
      return (
        <>
        <Nav />
        <div className="App-logo">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="200rem" height="200rem" alt=""></img>
        </div>
        </>
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
        <h1>Buenos dias, {user.author.names[getRandomInt(0,4)]}</h1>
        <h2>Son las {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
var createClass =  require('create-react-class');
var Calculator = createClass({
getInitialState: function() {
  return {botNum : ''};
},
WhenChange :function(e) {
  this.setState({botNum: e.target.value});
},
WhenClick :function() {
  this.state.botNum2 = this.state.botNum;
  document.getElementById("text").value = "";

},
Mult: function() {
    this.state.botNum2 =this.state.botNum2*this.state.botNum;
    if (isNaN(this.state.botNum2)) {
      alert("Primero tienes que guardar un valor antes de hacer una operacion")
    }
},
Rest: function() {
  this.state.botNum2-=this.state.botNum;
  if (isNaN(this.state.botNum2)) {
    alert("Primero tienes que guardar un valor antes de hacer una operacion")
  }
},
Div: function() {
  this.state.botNum2/=this.state.botNum;
  if (isNaN(this.state.botNum2)) {
    alert("Primero tienes que guardar un valor antes de hacer una operacion")
  }
},
Sum: function() {
  this.state.botNum2 = parseInt(this.state.botNum2)+parseInt(this.state.botNum);
  if (isNaN(this.state.botNum2)) {
    alert("Primero tienes que guardar un valor antes de hacer una operacion")
  }
},
Double: function() {
   this.state.botNum2 = Math.pow(this.state.botNum2,this.state.botNum);
  if (isNaN(this.state.botNum2)) {
    alert("Primero tienes que guardar un valor antes de hacer una operacion")
  }
},
Root : function() {
  this.state.botNum2 = Math.sqrt(this.state.botNum2,this.state.botNum);
  if (isNaN(this.state.botNum2)) {
    alert("Primero tienes que guardar un valor antes de hacer una operacion")
  }
},
render: function() {
  return (
    <div className="Calculator">
      <table>
      <a type="button" href="/">Inicio</a>
      <input type="text" className="btn-primary" id="text" onChange={this.WhenChange} name="value" />
      <input type="button" className="btn-primary" onClick={this.WhenClick} value="Guardar Valor"  /><br />
      <input type="button" className="btn-primary" onClick={this.Mult} value="Mult" />
      <input type="button" className="btn-primary" onClick={this.Rest} value="Rest" />
      <input type="button" className="btn-primary" onClick={this.Div} value="Div" />
      <input type="button" className="btn-primary" onClick={this.Sum} value="Sum" />
      <input type="button" className="btn-primary" onClick={this.Double} value="Double" />
      <input type="button" className="btn-primary" onClick={this.Root} value="Root" />
      <h1>resultado = {this.state.botNum2}</h1>
      </table>
    </div>
  );
}
});
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
            <p className="mytext">{this.state.text}</p><br />
            <img src="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/06/22/5fa4335996cdf.jpeg" height="60%" width="350px" id="img" alt="Hola"></img>
          </div>
        );
      }
}
const data = {
  labels: ['Ubuntu', 'Debian', 'Linux Mint', 'ArchLinux', 'Fedora', 'RedHat'],
  datasets: [
    {
      label: 'Distribuciones de linux',
      data: [67, 45, 25, 12, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
class Canva extends React.Component {
constructor(props) {
  super(props);
}
render() {
  return (
    <>
    <div className='header'>
      <Nav />
      <h1 className='title'>Porcentaje de uso distribuciones linux</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Doughnut.js'
        >
        </a>
      </div>
    </div>
    <Doughnut data={data} />
  </>
  )
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
          <Route path="/Calculator">
            <Calculator />
          </Route>
          <Route path="/Canva">
            <Canva />
          </Route>
          <Route path="/">
            <MESSAGE />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

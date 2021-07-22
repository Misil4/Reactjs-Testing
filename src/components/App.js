import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Drag from './Drag.js';
import MESSAGE from './Message';
import Calculator from './Calculator';
import Canva from './Canva';
import Title from './Title';
import Historia from './Historia';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
export default function App() {
  return (
    <Router>
      <div>
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
            <Drag />
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

import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
  export default Nav;
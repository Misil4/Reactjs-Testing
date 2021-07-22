import React from 'react';
import './App.css';
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
    export default Calculator;
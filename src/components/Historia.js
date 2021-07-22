import React from 'react';
import Nav from './Nav';
import './App.css';
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
  export default Historia;
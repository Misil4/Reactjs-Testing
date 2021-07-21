import React from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
 class Drag extends React.Component {
     render() {
         return (
            <Draggable>
            <div>
                <Button><Link to="/">Inicio</Link></Button>
            </div>
            </Draggable>
         );
     }
 }
 export default Drag;
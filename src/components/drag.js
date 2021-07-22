import React from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
let counter = 1;
 class Drag extends React.Component {
     render() {
         return (
             <>
            <Draggable>
            <div>
                <Button><Link to="/">Inicio</Link></Button>
            </div>
            </Draggable>
            <Draggable>
            <Button className="brick">{counter++}</Button>
            </Draggable>
            <Draggable>
            <Button className="brick">{counter++}</Button>
            </Draggable>
            <Draggable>
            <Button className="brick">{counter++}</Button>
            </Draggable>
            <Draggable>
            <Button className="brick">{counter++}</Button>
            </Draggable>
            <Draggable>
            <Button className="brick">{counter++}</Button>
            </Draggable>
            <Draggable>
            <Button className="brick">{counter++}</Button>
            </Draggable>
            </>
         );
     }
 }
 export default Drag;
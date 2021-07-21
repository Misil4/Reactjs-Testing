import React from 'react';
import Text from './text';
import Clock from './Clock';
import { getRandomInt,user } from './user';
import Nav from './Nav';

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
        </div><div clas sName="Nav"><Nav /><Text /></div></>
              {this.props.children}
            </main>
      
            <footer>
              Copyright {user.author.names[getRandomInt(0,4)]} {this.state.date.getFullYear()}
            </footer>
          </div>
      )
    }
  }
  export default MESSAGE;
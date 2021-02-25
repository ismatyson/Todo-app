import React, { Component } from 'react';
import CounterCard from './counterCard'

class CounterPad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          <div className="counterPad">
               <div className="counterCard">
               <CounterCard />
               </div>
          </div> 
        );
    }
}
 
export default CounterPad;
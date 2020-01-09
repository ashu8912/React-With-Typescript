import * as React from "react";



/*
For Default Props
  {
      propertyName?:type
  }

  class ---  {
      static defaultProps:Props={
         count:10
      }
  }
*/
interface Props{

}

interface State{
       count:number
}

export default class Counter extends React.Component<Props,State>{
    state:State={
        count:0
    };
    increment=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
    decrement=()=>{
        this.setState((prevState)=>({count:prevState.count-1})) 
    }
    render(){
        return (<div>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>)
    }
}
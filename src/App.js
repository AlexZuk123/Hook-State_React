import React from "react";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentValue: 0
    };
  }

  render(){
    const handlerClick=()=>{
      this.setState({currentValue: this.state.currentValue + 1});
    };
    return <button onClick={handlerClick}>
      {this.state.currentValue}
    </button>;
  }
}

// export default class App extends React.Component{
//   render(){
//     return(
//       <>
//       <Counter/>
//       </>
//     );
//   }
// }

export default function App(props) {
  return(
    <div className="App">
      <h1>Information about writer:</h1>
      <h2>{props.name}</h2>
      <h2>{props.lastName}</h2>
    </div>
  )
}

App.defaultProps={name: "William", lastName: "Shakespeare"};

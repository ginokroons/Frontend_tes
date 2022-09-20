import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



// components and properties

// function Bio(props /*properties*/) {
//   return <span>Umur {props.age}</span>
// }

// function Greeting(props) {
//   return <h1>Halo {props.nama} - <Bio age={props.age}/></h1>
// }


// STATE
// hanya bisa di class bukan di function





// class Timer extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       time: props.start 
//     }
//   }

//   //Lifecycle
//   componentDidMount() {
//     this.addInterval = setInterval( () => this.increase(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.addInterval);
//   }

//   increase() {
//     //update state Time setiap detik
//     this.setState((state, props) => ({
//       time: parseInt(state.time) + 1
//     }))
//   }

//   render() {
//     return (
//       <div> {this.state.time} Detik </div>
//     )
//   }
// }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting nama='Gino' age='20'/> */}
        <Timer start='0'/>
        <Timer start='5'/>
      </header>
    </div>
  );
}

export default App;

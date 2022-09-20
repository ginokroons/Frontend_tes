import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



class Toggle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggleStatus: true
        }

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState(state => ({
            toggleStatus: !state.toggleStatus
        }))
    }

    render() {
        return (
            <button className='but' onClick={this.handleClick}>
                {this.state.toggleStatus ? 'On' : 'Off'}
                <p>Kondisi Sekarang {this.state.toggleStatus ? 'Menyala' : 'Mati'}</p>
            </button>
        )
    }

}


function App2() {
  return (
    <div className="App2">
        <Toggle/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App2;

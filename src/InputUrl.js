import './App.css';
import { Component } from 'react';

class inputUrl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            link: ''
        })
        console.log(event.target);
    }

    handleChange = (event) => {
        this.setState({
            todoItem: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.link} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>
          );
    }
}

export default inputUrl;
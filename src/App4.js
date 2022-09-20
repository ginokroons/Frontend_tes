import './App.css';
import { Component } from 'react';



class App4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: '',
            isValid: false
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
        const regExQ = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
        if(event.target.value.match(regExQ)){
            this.setState({
                [event.target.name]: event.target.value,
                isValid: true
            })
        }else{
            this.setState({
                [event.target.name]: event.target.value,
                isValid: false
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='link' value={this.state.link} onChange={this.handleChange}/>
                    <button>Add</button>
                    {!this.state.isValid?<p>invalid</p>:<p>ok</p>}
                </form>
            </div>
          );
    }
}

export default App4;
import { Component } from 'react';
import './inputUrl.css';
import FormInput from './FormInput';

class compUrl extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(data);
    };
    
    
    render() {
        return (
            <div className='app'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='link' placeholder='Link'/>
                </form>
            </div>
        )
    }
}

export default compUrl;
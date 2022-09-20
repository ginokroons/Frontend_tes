import './App.css';
import { Component } from 'react';
import axios from 'axios';
// import qs from 'querystring';

const api = 'joanitolopo.space/'
// const api = 'https://jsonplaceholder.typicode.com/'
// const api = 'https://guarded-dusk-41374.herokuapp.com/'

const data = {
    "id":"e5f8bb3a-1853-4368-8bc1-4c94f6163056",
    "image":"python",
    "title":"python",
    "version":"",
    "variants":"",
    "date":"09-14-2022",
    "time":"15:52:43",
    "path":"app/repository/Results/09-14-2022/python/python.json"
}

class API extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            response: ''
        }
    }

    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(data =>this.setState({items: data}))
    // }


    componentDidMount() {
        axios.get('http://joanitolopo.space/get_history').then(res=>{
            console.log(res.data)
            this.setState({
                items: res.data.data
            })
        })
    }


    // componentDidMount() {
    //     axios.post(api, data)
    //     .then((data) => {
    //         console.log(data.data)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }

    // componentDidMount() {
    //     axios.get(api, data).then(res=>{
    //         console.log(res)
    //         this.setState({
    //             items: res.data
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }


    render () {

        // const {items} = this.state.items

        console.log(this.state.items);

        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => 
                    <li key={index}> {item.image} </li>)}
                </ul>
            </div>
        )
    }
}

export default API;
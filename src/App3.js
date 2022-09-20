import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {Button, Stack, TextField} from '@mui/material';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';

const api = 'https://jsonplaceholder.typicode.com/posts'
// const api = 'https://7c14-103-164-132-83.ap.ngrok.io/scan_image'

class App3 extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         namaImage: '',
    //         images: []
    //     }
    // }

    constructor(props) {
        super(props)
        this.state = this.initialState;
    }

    initialState = {
        id:"",
        image:"",
        title:"",
        version:"",
        variants:"",
        date:"",
        time:"",
        path:""
    }

    // initialState = {
    //     image:""
    // }

    handleSubmit = (event) => {
        event.preventDefault()

        // const images = {
        //     id:this.state.id,
        //     image:this.state.image,
        //     title:this.state.title,
        //     version:this.state.version,
        //     variants:this.state.variants,
        //     date:this.state.date,
        //     time:this.state.time,
        //     path:this.state.path
        // }

        const images = {
            image:this.state.image
        }

        axios.post(api, images)
            .then(response => {
                console.log(response);
                if(response.data != null){
                    this.setState({"show":true, "method":"post"});
                }
                else {
                    this.setState({"show":true});
                }
            });
            this.setState(this.initialState);

        console.log(event.target);


        // this.setState({
        //     images: [...this.state.images, this.state.namaImage],  // mengambil data dari data sebelumnya dan menggabung dengan data yang baru
        //     namaImage: ''
        // })
        // console.log(event.target);
    }

    handleChange = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    render() {

        const {image, title} = this.state

        return (
            // <div>
            //     <form onSubmit={this.handleSubmit}>
            //         <input value={image} onChange={this.handleChange}/>
            //         <button>Submit</button>
            //     </form>

            //     {/* <List images={this.state.images} /> */}
            // </div>

            <div className="App">
             {/* <Stack spacing={2} direction='row' onSubmit={this.handleSubmit}> */}
                <form onSubmit={this.handleSubmit}>
                    <TextField value={image} onChange={this.handleChange} variant='outlined' label='Nama Image' />
                    <Button variant="contained" type='submit'>Submit</Button>
                </form>
             {/* </Stack> */}
            </div>
        );
    }
}

export default App3;

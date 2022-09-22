import './App.css';
import { Component, useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Stack, TextField} from '@mui/material';
import React from 'react'

function App3() {

    const [nameImage, setNameImage] = useState('');



    useEffect(() => {
        // axios.get(`https://joanitolopo.space/get_result/`+ 'python')
        //     .then(response => {
        //         console.log(response);
        //     });
      console.log('hi',nameImage);
    }, [nameImage])
    

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.get(`https://joanitolopo.space/get_result/`+ nameImage)
            .then(response => {
                console.log(response); 
            });

        console.log(event.target);

    }

    const handleChange = (event) => {
         setNameImage(event.target.value);
    }

  return (
    <div className="App">
             {/* <Stack spacing={2} direction='row' onSubmit={this.handleSubmit}> */}
                <form onSubmit={handleSubmit}>
                    <TextField size='small' value={nameImage} onChange={handleChange} variant='outlined' label='Nama Image' />
                    <Button variant="contained" type='submit'>Submit</Button>
                </form>
             {/* </Stack> */}
            </div>
  )
}

export default App3;
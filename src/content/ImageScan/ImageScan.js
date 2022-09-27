import { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Stack, TextField, Typography, Box} from '@mui/material';
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

        axios.post(`https://joanitolopo.space/scan_image`+ nameImage)
          .then(response => {
              console.log(response); 
          });

        

        console.log(event.target);

    }

    const handleChange = (event) => {
      setNameImage(event.target.value);
    }  


  return (
    <div>
        <Box
        component='form'
        sx={{
          m: 5,
          width: 800,
          maxWidth: '50%'
        }}
        onSubmit={handleSubmit}
        >
          <Stack spacing={4}>
            <Stack spacing={7} direction='row'>
              <Typography variant='subtitle2'>Image Name</Typography>
              <TextField size='small' value={nameImage} onChange={handleChange} variant='outlined'/>  
            </Stack>
            <Button variant="contained" type='submit'>Submit</Button>
          </Stack>
        </Box>
    </div>
  )
}

export default App3;
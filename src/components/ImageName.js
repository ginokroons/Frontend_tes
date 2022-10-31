import { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Stack, TextField, Typography, Box, Modal} from '@mui/material';
import React from 'react'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const ImageName = ({open1, handleClose}) => {

  
  const [nameImage, setNameImage] = useState('');

    useEffect(() => {
        // axios.get(`https://joanitolopo.space/get_result/`+ 'python')
        //     .then(response => {
        //         console.log(response);
        //     });
    }, [nameImage])
    

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`https://joanitolopo.space/scan_image`+ nameImage)
          .then(response => {
              console.log(response);
              console.log('hai');
              handleClose()
          })
          .catch(err => {
            console.log(err);
          });
      
        console.log(event.target);

    }

    const handleChange = (event) => {
      setNameImage(event.target.value);
      console.log(event.target)
    }  


  return (
    <Modal
      open={open1}
      onClose={handleClose}
    >
      <Box
      component='form'
      sx={style}
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
    </Modal>
  )
}

export default ImageName
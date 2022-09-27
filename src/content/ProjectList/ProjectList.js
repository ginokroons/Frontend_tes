import React from 'react'
import '../../App.css'
import { useState, useCallback } from 'react';
import {Button, Stack, TextField, Typography, Box, Modal, Paper} from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import axios from 'axios';

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


const ProjectList = () => {

    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const handleClose = useCallback(() => {
        setOpen(false)
        setProjectName('')
        setProjectDesc('')
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        axios.post(`http://192.168.1.148/roy/project`+ projectName)
            .then(response => {
              console.log(response); 
            });

        handleClose()
        console.log(event.target);

    }

    const handleChange1 = (event) => {
      setProjectName(event.target.value);
    }

    const handleChange2 = (event) => {
      setProjectDesc(event.target.value);
    }

  return (
    <div>
        <Box
        sx={{
          m: 5,
          width: 800,
          height: 500,
          maxWidth: '50%'
        }}
        >
        {/* <Paper variant='outlined' elevation={4}> */}
        <Button variant='contained' endIcon={<AddCircleOutline/>} onClick={handleOpen}>Add Project</Button>
        {/* </Paper> */}
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box component='form' sx={style} onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <Stack spacing={6} direction='row'>
                        <Typography variant='subtitle2'>Project Name</Typography>
                        <TextField size='small' value={projectName} onChange={handleChange1} variant='outlined'/>  
                    </Stack>
                    <Stack spacing={4} direction='row'>
                        <Typography variant='subtitle2'>Project Description</Typography>
                        <TextField size='small' value={projectDesc} onChange={handleChange2} variant='outlined' multiline fullwidth/>  
                    </Stack>
                    <Button variant="contained" type='submit'>Submit</Button>
                </Stack>
            </Box>
        </Modal>
        </Box>
    </div>
  )
}

export default ProjectList
import { React } from 'react';
import '../App.css'
import {Button, Stack, TextField, Typography, Box, Modal} from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import axios from 'axios';
import { useState } from 'react';


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


const PostProject = () => {

  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
      setOpen(false)
      setProjectName('')
      setProjectDesc('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post(`http://192.168.1.148/roy/project`, {projectname: projectName, description: projectDesc})
      .then(response => {
        console.log(response.data.data); 
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
      <Button variant='contained' endIcon={<AddCircleOutline/>} onClick={handleOpen}>Add Project</Button>

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
            <Stack spacing={2} direction='row'>
                <Typography variant='subtitle2'>Project Description</Typography>
                <TextField size='small' value={projectDesc} onChange={handleChange2} variant='outlined'/>  
            </Stack>
            <Button variant="contained" type='submit'>Add</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default PostProject
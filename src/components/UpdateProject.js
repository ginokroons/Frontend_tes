import { React } from 'react';
import '../App.css'
import {Button, Stack, TextField, Typography, Box } from '@mui/material';


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


const UpdateProject = ({project, handleSubmit, handleChange}) => {


  return (
    <div>
      <Box component='form' sx={style} onSubmit={(e) => handleSubmit(e, 'update')}>
        <Stack spacing={4}>
          <Stack spacing={6} direction='row'>
              <Typography variant='subtitle2'>Project Name</Typography>
              <TextField size='small' value={project.name} name='name' onChange={handleChange} variant='outlined'/>  
          </Stack>
          <Stack spacing={2} direction='row'>
              <Typography variant='subtitle2'>Project Description</Typography>
              <TextField size='small' value={project.desc} name='description' onChange={handleChange} variant='outlined'/>  
          </Stack>
          <Button variant="contained" type='submit'>Update</Button>
        </Stack>
      </Box>
    </div>
  )
}

export default UpdateProject
import { React } from 'react';
import '../App.css'
import {Button, Stack, TextField, Typography, Box, Modal} from '@mui/material';


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


const PostProject = ({
  open,
  handleClose,
  handleSubmit,
  handleChange,
  project}) => {


  return (

      <Modal
        open={open}
        onClose={handleClose}
        >
        <Box component='form' sx={style} onSubmit={(e) => handleSubmit(e, 'create')}>
          <Stack spacing={4}>
            <Stack spacing={6} direction='row'>
                <Typography variant='subtitle2'>Project Name</Typography>
                <TextField size='small' value={project.name} name='name' onChange={handleChange} variant='outlined'/>  
            </Stack>
            <Stack spacing={2} direction='row'>
                <Typography variant='subtitle2'>Project Description</Typography>
                <TextField size='small' value={project.desc} name='description' onChange={handleChange} variant='outlined'/>  
            </Stack>
            <Button variant="contained" type='submit'>Add</Button>
          </Stack>
        </Box>
      </Modal>
  )
}

export default PostProject
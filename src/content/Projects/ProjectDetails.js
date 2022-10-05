import React from 'react'
import { Box, Grid, Stack, Button, Card, Typography } from '@mui/material'
import { InsertDriveFile, KeyboardArrowDown } from '@mui/icons-material'

const ProjectDetails = () => {
  return (
    <Box className='Content'>
      <Box
        sx={{
          
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
      >
        <Grid container direction='row' sx={{flexGrow: 1}}>
          <Card sx={{width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <InsertDriveFile color='primary' sx={{fontSize: 40}}/>
          </Card>
          <Typography variant='h5'>Tes</Typography>
        </Grid>
        <Button variant='contained' endIcon={<KeyboardArrowDown/>}>Image Scan</Button>
        <Button variant='contained' endIcon={<KeyboardArrowDown/>}>Configuration Scan</Button>
      </Box>
    </Box>
  )
}

export default ProjectDetails
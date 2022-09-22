import React from 'react'
import { AppBar, Button, Toolbar, Typography, Stack, Box } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <Box
                component="img"
                alt="logo"
                src="./logo-wordmark.png"
            />
            <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                I3gis
            </Typography>
            <Stack direction='row' spacing={2}>
                <Button variant='outlined' color='inherit'>Image Scan</Button>
                <Button variant='outlined' color='inherit'>Configuration Scan</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
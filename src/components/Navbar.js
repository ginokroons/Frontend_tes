import React from 'react';
import { AppBar, Button, Toolbar, Stack, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='static'>
        <Toolbar>
          <Stack direction='row' spacing={2}>
            <img alt='logo' src='/logo-wordmark.png' width={100} />
            <Button color='inherit' to='/project-list' component={RouterLink}>
              Project List
            </Button>
            {/* <Button color='inherit' to='/project-details' component={RouterLink}>
              detail
            </Button> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

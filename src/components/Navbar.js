/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Button, Toolbar, Stack, Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position='static'>
        <Toolbar>
          <Stack direction='row' spacing={2}>
            <img alt='logo' src='/logo-wordmark.png' width={100} />
            <Button color='inherit' to='/project-list' component={RouterLink}>
              Project List
            </Button>
            <Button color='inherit' endIcon={<KeyboardArrowDown />} to='/scan-images' component={RouterLink}>
              Image Scan
            </Button>
            <Button color='inherit' endIcon={<KeyboardArrowDown />} to='/configuration-scan' component={RouterLink}>
              Configuration Scan
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import React from 'react';
import { AppBar, Button, Toolbar, Typography, Stack, Box } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

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
    <AppBar position='static'>
      <Toolbar>
        <img alt='logo' src='/logo-wordmark.png' width={100} />
        <Stack direction='row' spacing={2}>
          <Button color='inherit' endIcon={<KeyboardArrowDown />}>
            Image Scan
          </Button>
          <Button color='inherit' endIcon={<KeyboardArrowDown />}>
            Configuration Scan
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

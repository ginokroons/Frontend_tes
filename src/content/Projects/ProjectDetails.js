import React from 'react';
import { Box, Grid, Stack, Button, Card, Typography } from '@mui/material';
import { InsertDriveFile, KeyboardArrowDown } from '@mui/icons-material';

const ProjectDetails = () => {
  return (
    <Box className='Content'>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Box
          sx={{
            display: 'flex',
          }}
          gap={2}>
          <Card sx={{ width: 80, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <InsertDriveFile color='primary' sx={{ fontSize: 40 }} />
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Typography variant='h5'>Project Name</Typography>
            <Typography variant='h5'>Description Project</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
          gap={2}>
          <Button variant='contained' endIcon={<KeyboardArrowDown />}>
            Image Scan
          </Button>
          <Button variant='contained' endIcon={<KeyboardArrowDown />}>
            Configuration Scan
          </Button>
        </Box>
      </Box>

      <Card sx={{ width: '100%', height: '600px', mt: 2 }}>content</Card>
    </Box>
  );
};

export default ProjectDetails;

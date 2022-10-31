import {React, useState, useEffect} from 'react';
import { Box, Button, Card, Menu, MenuItem, Skeleton, Typography } from '@mui/material';
import { Folder, KeyboardArrowDown } from '@mui/icons-material';
import Editor from '../../components/Editor';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ImageName from '../../components/ImageName';
import UploadFileImage from '../../components/UploadFileImage';
import UploadFileConf from '../../components/UploadFileConf';
import FileTable from '../../components/FileTable';

const ProjectDetails = () => {

  const {projectId} = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const [type, setType] = useState('')
  const [project, setProject] = useState(null);
  const [open1, setOpen1] = useState({imagename: false, imageupload: false, confedit: false, confupload: false});
  const open = Boolean(anchorEl);
  const handleClick = (event, type) => {
    setType(type)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenImageName = () => setOpen1(prev => ({...prev, imagename: true}));
  const handleCloseImageName = () => {
    setOpen1(prev => ({...prev, imagename: false}))
  }
  const handleOpenImageUpload = () => setOpen1(prev => ({...prev, imageupload: true}));
  const handleCloseImageUpload = () => {
    setOpen1(prev => ({...prev, imageupload: false}))
  }
  const handleOpenConfEdit = () => setOpen1(prev => ({...prev, confedit: true}));
  const handleCloseConfEdit = () => {
    setOpen1(prev => ({...prev, confedit: false}))
  }
  const handleOpenConfUpload = () => setOpen1(prev => ({...prev, confupload: true}));
  const handleCloseConfUpload = () => {
    setOpen1(prev => ({...prev, confupload: false}))
  }
  

  useEffect(() => {
    axios.get(`http://192.168.1.129/roy/project/${projectId}`)
      .then(response => {
        console.log( response.data.data, 'dari respons');
        setProject(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [projectId])

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
            <Folder color='primary' sx={{ fontSize: 40 }} />
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: 200
            }}>
            <Typography variant='h4' noWrap>{project?.projectname??<Skeleton width='100px' />}</Typography>
            <Typography variant='subtitle2' noWrap>{project?.description??<Skeleton width='200px'/>}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
          gap={2}>
          <Button 
            id='image-button'
            variant='contained' 
            endIcon={<KeyboardArrowDown />}
            aria-controls={open ? 'image-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={(e)=>{
              handleClick(e,'image')
            }}
          >
            Image Scan
          </Button>
          <Button
            id='conf-button'
            variant='contained' 
            endIcon={<KeyboardArrowDown />}
            aria-controls={open ? 'conf-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={(e)=>{
              handleClick(e,'configuration')
            }}
          >
            Configuration Scan
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {type==='configuration'?
            <><MenuItem onClick={handleOpenConfEdit}>Input Code</MenuItem>
              <MenuItem onClick={handleOpenConfUpload}>Upload File</MenuItem></>:
            <><MenuItem onClick={handleOpenImageName}>Image Name</MenuItem>
              <MenuItem onClick={handleOpenImageUpload}>Upload File</MenuItem></>}
          </Menu>
        </Box>
      </Box>

      <Card sx={{ width: '100%', height: '400px', mt: 4 }}>
        <FileTable
          projectId={projectId}
        />
      </Card>
      <ImageName
        open1={open1.imagename}
        handleClose={handleCloseImageName}
      />
      <UploadFileImage
        open1={open1.imageupload}
        handleClose={handleCloseImageUpload}
      />
      <Editor
        open1={open1.confedit}
        handleClose={handleCloseConfEdit}
      />
      <UploadFileConf
        open1={open1.confupload}
        handleClose={handleCloseConfUpload}
      />
    </Box>
  );
};

export default ProjectDetails;
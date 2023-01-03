import { Box, Button, Card, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';
import axios from 'axios';
import { useEffect } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
};


function UploadFileImage({open1, handleClose}) {

  // const handleOnDrop = (files, rejectedFiles) => {
  //   console.log(files);
  // }

  // const [selectedFiles, setSelectedFiles] = useState({file: null})

  // const handleFiles = (data) => {
  //   setSelectedFiles({file: data})
  // }

  const [selectedFiles, setSelectedFiles] = useState(null)

  const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps
    } = useDropzone({
      accept: {
        'application/x-tar': []
      }
    });
    
    const acceptedFileItems = acceptedFiles.map(file => {
      console.log(file);
      // handleFiles(file)
      return (
        <Card sx={{m: 2, height: 50, width: 400, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}
        >
          <InsertDriveFile color='primary' sx={{ m: 1, fontSize: 30 }} />
          {file.name}
        </Card>
      )
    });
    
    const fileRejectionItems = fileRejections.map(({ file, errors }) => {
      console.log(file, errors);
      return (<li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map(e => (
            <li key={e.code}> {e.message} </li>
          ))}
        </ul>
      </li>)
    });
    
  const handleSubmitFile1 = (event) => {
    event.preventDefault()
      
    axios.post(`${process.env.REACT_APP_BACKEND_JOAN}/uploadFile`, {file: selectedFiles})
      .then(response => {
        console.log(response);
        // handleCloseCreate()
      })
      .catch(err => {
        console.log(err.response.data.Message)
      });

    console.log(event.target);
    console.log('tes');
  }

  useEffect(() => {
    setSelectedFiles(acceptedFiles[0])
    console.log(acceptedFiles)
  }, [acceptedFiles])
  
  
  console.log(selectedFiles)
  
  return (
    <Modal
      open={open1}
      onClose={handleClose}
    >
      <Box component='form' sx={style} onSubmit={handleSubmitFile1}>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Card variant='outlined' sx={{ width: 500, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'dashed', borderColor: 'primary.main', borderRadius: '16px'}}>
            <CloudUpload color='primary' sx={{fontSize: 50}}/>
            <Typography color='primary'>Drag 'n' drop some files here, or click to select files</Typography>
          </Card>
        </div>
        <aside>
          <h4>Accepted files</h4>
          {acceptedFileItems}
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
        </aside>
        <Button variant="contained" type='submit'>Scan</Button>
      </Box>
    </Modal>
  );
}

export default UploadFileImage;
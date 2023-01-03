import { Box, Button, Card, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';
import axios from 'axios';


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


// const fileName = 'Dockerfile';


// function nameValidator(file) {
//   if (file.name !== fileName) {
//     return {
//       code: "Wrong file name",
//       message: `File name should be ${fileName}`
//     }
//   }
//   return null
// }

function UploadFileConf({open1, handleClose}) {

  const [selectedFiles, setSelectedFiles] = useState(null)

    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
      } = useDropzone({
        // validator: nameValidator
      });
    
      const acceptedFileItems = acceptedFiles.map(file => {
        console.log(file);
        return (
          <Card sx={{m: 2, height: 50, width: 400, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}
          >
            <InsertDriveFile color='primary' sx={{ m: 1, fontSize: 30 }} />
            {file.name}
          </Card>
        )
      });

      console.log(acceptedFileItems)
    
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

      const handleSubmit = (event) => {
        event.preventDefault()
          
        axios.post(`${process.env.REACT_APP_BACKEND_ROY}/upload`, {pathfile: selectedFiles})
          .then(response => {
            console.log(response);
            // handleCloseCreate()
          })
          .catch(err => {
            console.log(err)
          });
    
        console.log(event.target);
      }

  useEffect(() => {
    setSelectedFiles(acceptedFiles[0])
    console.log(acceptedFiles)
  }, [acceptedFiles])

  return (
    <Modal
      open={open1}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <Box component='form' sx={style} onSubmit={handleSubmit}>
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

export default UploadFileConf;
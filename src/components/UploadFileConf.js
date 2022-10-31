import { Box, Card, Modal, Typography } from '@mui/material';
import React from 'react';
import {useDropzone} from 'react-dropzone';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';


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


const fileName = 'Dockerfile';


function nameValidator(file) {
  if (file.name !== fileName) {
    return {
      code: "Wrong file name",
      message: `File name should be ${fileName}`
    }
  }
  return null
}

function UploadFileConf({open1, handleClose}) {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
      } = useDropzone({
        validator: nameValidator
      });
    
      const acceptedFileItems = acceptedFiles.map(file => {
        console.log(file);
        // return (<li key={file.path}>
        //   {file.name} - {file.size} bytes
        // </li>)
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
    
  return (
    <Modal
      open={open1}
      onClose={handleClose}
    >
      <Box sx={style}>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Card variant='outlined' sx={{ width: 500, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'primary.main', borderRadius: '16px'}}>
            <CloudUpload color='primary' sx={{fontSize: 50}}/>
            <Typography color='primary'>Drag 'n' drop some files here, or click to select files</Typography>
          </Card>
        </div>
        <aside>
          {/* <h4>Accepted files</h4> */}
          {acceptedFileItems}
          {/* <h4>Rejected files</h4> */}
          <ul>{fileRejectionItems}</ul>
        </aside>
      </Box>
    </Modal>
  );
}

export default UploadFileConf;
import { Card, Typography } from '@mui/material';
import React from 'react';
import {useDropzone} from 'react-dropzone';
import { CloudUpload } from '@mui/icons-material';


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

function UploadFile(props) {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
      } = useDropzone({
        // accept: {
        //   'application/x-tar': []
        // //   'text/x-dockerfile': []
        // }
        validator: nameValidator
      });
    
      const acceptedFileItems = acceptedFiles.map(file => {
        console.log(file);
        return (<li key={file.path}>
          {file.name} - {file.size} bytes
        </li>)
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
        <section className="container">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <Card variant='outlined' sx={{ width: 500, height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 1, borderColor: 'primary.main', borderRadius: '16px'}}>
              <CloudUpload color='primary' sx={{fontSize: 50}}/>
              <Typography color='primary'>Drag 'n' drop some files here, or click to select files</Typography>
            </Card>
          </div>
          <aside>
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
            <h4>Rejected files</h4>
            <ul>{fileRejectionItems}</ul>
          </aside>
        </section>
      );
}

export default UploadFile;
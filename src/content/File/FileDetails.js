import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box } from '@mui/material';

const FileDetails = () => {

  const {fileId} = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get(`http://192.168.1.129/roy/project/${fileId}`)
      .then(response => {
        setFile(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fileId])

  return (
    <Box className='content'>
      
    </Box>
  )
}

export default FileDetails
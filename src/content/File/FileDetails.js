import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, Skeleton, Typography } from '@mui/material';
import { FileCopy } from '@mui/icons-material';
import ScanResultCard from '../../components/ScanResultCard';

const FileDetails = () => {

  const {fileId} = useParams();
  const [file, setFile] = useState([]);
  const [results, setResults] = useState([]);

  console.log(results, "ye");
  console.log(fileId);
  console.log(file, 'ini file');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_ROY}/upload/${fileId}`)
      .then(response => {
        console.log(response.data.data, "hai");
        setFile(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fileId])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_ROY}/jsonfile/${fileId}`)
      .then(response => {
        console.log(response, "hai")
        setResults(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fileId])

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
            <FileCopy color='primary' sx={{ fontSize: 40 }} />
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: 200
            }}>
            <Typography variant='h4' noWrap>{file?.pathfile??<Skeleton width='100px' />}</Typography>
            <Typography variant='subtitle2' noWrap>{file?.pathjson??<Skeleton width='200px'/>}</Typography>
          </Box>
        </Box>
      </Box>

      <ScanResultCard
        results={results}
        fileId={fileId}
      />

    </Box>

  )
}

export default FileDetails
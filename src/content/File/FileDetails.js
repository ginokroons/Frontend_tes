import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Card, CircularProgress, Skeleton, TableCell, TableRow, Typography } from '@mui/material';
import { FileCopy } from '@mui/icons-material';

const FileDetails = (result) => {

  const {fileId} = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios.get(`http://192.168.1.129/roy/upload/${fileId}`)
      .then(response => {
        setFile(response.data.data)
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

      <Card sx={{ width: '100%', height: '300px', mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {result.filter((file) => file.fileID === parseInt(FileId)).map(filteredfile => (
            console.log(filteredfile),
              <TableRow
                key={filteredfile.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {filteredfile.pathfile}
                </TableCell>
                <TableCell>{filteredfile.pathjson}</TableCell>
              </TableRow>
            ))}
            <CircularProgress size={80}/>
      </Card>

    </Box>

  )
}

export default FileDetails
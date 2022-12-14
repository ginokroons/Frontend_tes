import React from "react";
import {Box, Paper} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {IconButton} from '@mui/material';
import { OpenInNew, Delete } from '@mui/icons-material';





const FileTable = ({files, projectId, handleDelete1, handleClickDetails1}) => {
  console.log(files.filter(data=>data.ProjectID===parseInt(projectId)),'haii')
  console.log((typeof parseInt(projectId)), projectId)
  console.log(files.map(data=>data.ProjectID))

  return (
    <Box sx={{ boxShadow: 3 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Target</TableCell>
              <TableCell>File Type</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {files.filter((file) => file.ProjectID === parseInt(projectId)).map(filteredfile => (
              console.log(filteredfile),
              <TableRow
                key={filteredfile.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {filteredfile.pathfile}
                </TableCell>
                <TableCell>{filteredfile.pathjson}</TableCell>
                <TableCell>{filteredfile.CreatedAt}</TableCell>
                <TableCell>
                <IconButton onClick={() => handleDelete1()}>
                  <Delete sx={{color: '#f44336'}}/>
                </IconButton>
                <IconButton onClick={() => handleClickDetails1(filteredfile)}>
                  <OpenInNew color='primary'/>
                </IconButton>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default FileTable
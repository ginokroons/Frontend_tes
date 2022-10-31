import React from "react";
import {Box, Paper} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const FileTable = ({files, projectId}) => {
  console.log(files.filter(data=>data.ProjectID===2),'haii')

  return (
    <Box sx={{ boxShadow: 3 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>File Name</TableCell>
              <TableCell>File Type</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {files.filter((file) => file.ProjectID === projectId).map((filteredfile) => (
              console.log(filteredfile.pathfile),
              // console.log(file.ProjectID)
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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default FileTable
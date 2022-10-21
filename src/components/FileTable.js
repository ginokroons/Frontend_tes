import React from "react";
import {Box, Paper} from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const FileTable = () => {
  return (
    <Box sx={{ boxShadow: 3 }}>
      <TableContainer component={Paper} >
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
          {projects.filter((data) => (
              data.ID===dataUploads.projectId
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default FileTable
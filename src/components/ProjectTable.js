import React from "react";
import {Box, IconButton, Paper} from '@mui/material';
import { OpenInNew, Delete } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import UpdateProject from "./UpdateProject";

const ProjectTable = ({projects, handleDelete }) => { 
  return (
    <Box sx={{ boxShadow: 3 }}>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Project Description</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
              key={project.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {project.name}
              </TableCell>
              <TableCell>{project.username}</TableCell>
              <TableCell>{project.email}</TableCell>
              <TableCell>
                <UpdateProject projectData={project}/>
                <IconButton onClick={() => handleDelete()}>
                  <Delete sx={{color: '#f44336'}}/>
                </IconButton>
                <IconButton to='/project-details' component={RouterLink}>
                  <OpenInNew color='primary'/>
                </IconButton>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProjectTable;

import React from "react";
import {Box, IconButton, Paper} from '@mui/material';
import { Edit, OpenInNew, Delete } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const ProjectTable = ({projects, handleDelete, handleOpenUpdate, handleClickDetails}) => { 
  return (
    <Box sx={{ boxShadow: 3 }}>
      <TableContainer component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Project Description</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row">
                {project.projectname}
              </TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.CreatedAt}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenUpdate(project)}>
                  <Edit color='primary'/>
                </IconButton>
                <IconButton onClick={() => handleDelete(project)}>
                  <Delete sx={{color: '#f44336'}}/>
                </IconButton>
                <IconButton onClick={() => handleClickDetails(project)}>
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

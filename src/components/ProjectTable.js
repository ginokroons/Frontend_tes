import React from "react";
import {Box, IconButton, Paper} from '@mui/material';
import { Edit, OpenInNew, Delete } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Project 1', 'For Testing Only', '2022-09-08T07:11:29Z'),
  createData('Project 2', 'For Testing Only', '2022-09-08T12:10:30Z'),
  createData('Project 3', 'For Testing Only', '2022-09-08T02:45:14Z'),
  createData('Project 4', 'For Testing Only', '2022-09-09T10:34:00Z'),
  createData('Project 5', 'For Testing Only', '2022-09-09T23:00:99Z'),
];


const ProjectTable = ({projects, handleDelete, handleOpenUpdate, handleClickDetails}) => { 
  return (
    <Box sx={{ boxShadow: 3 }}>
      <TableContainer component={Paper} >
        <Table>
        {/* <TableHead>
          <TableRow>
            <TableCell align="center">Project Name</TableCell>
            <TableCell align="center">Project Description</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleOpenUpdate()}>
                  <Edit color='primary'/>
                </IconButton>
                <IconButton onClick={() => handleDelete()}>
                  <Delete sx={{color: '#f44336'}}/>
                </IconButton>
                <IconButton onClick={() => handleClickDetails()}>
                  <OpenInNew color='primary'/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
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
                <IconButton onClick={() => handleDelete()}>
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

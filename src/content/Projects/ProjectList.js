import { React, useState, useEffect } from 'react';
import '../../App.css'
import { Box, Card, Button, Modal } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import axios from 'axios';
import ProjectTable from '../../components/ProjectTable';
import PostProject from '../../components/PostProject';
import UpdateProject from '../../components/UpdateProject';
import UpdateProject1 from '../../components/UpdateProject1';


const ProjectList = () => {

  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({id: null, name: '', desc: ''});
  const [open, setOpen] = useState({create: false, update: false});
  const handleOpenCreate = () => setOpen(pref => ({...pref, create: true}));
  const handleCloseCreate = () => {
    setOpen(pref => ({...pref, create: false}))
    setProject({id: null, name: '', desc: ''})
  }
  const handleOpenUpdate = (data) => {
    setProject({id: data.ID, name: data.projectname, desc: data.description})
    setOpen(pref => ({...pref, update: true}))};
  const handleCloseUpdate = () => {
    setOpen(pref => ({...pref, update: false}))
    setProject({id: null, name: '', desc: ''})
  }

  const handleSubmit = (event, tipe) => {
    event.preventDefault()
    if (tipe === 'create') {
      
    axios.post(`http://192.168.1.148/roy/project`, {projectname: project.name, description: project.desc})
      .then(response => {
        console.log(response.data.data);
        handleCloseCreate()
        window.location.reload() 
      });
    console.log(event.target);

  }
    else {

    axios.put(`http://192.168.1.148/roy/project/${project.id}`, {projectname: project.name, description: project.desc})
      .then(response => {
        console.log(response.data.data);
        handleCloseUpdate()
        window.location.reload() 
      });

    
    console.log(event.target);

    }
    
  }

  const handleChange = (event) => {
    if (event.target.name === 'name')(
      setProject(pref => ({...pref, name: event.target.value}))
    )
    else (
      setProject(pref => ({...pref, desc: event.target.value}))
    )
    console.log(event.target.name)
  }

  

  useEffect(() => {
    console.log(projects)
    const filename = 'aaa.dockerfile'
    console.log(filename.includes('Dockerfile'))
  }, [projects])

  

  useEffect(() => {
    axios.get(`http://192.168.1.148/roy/project`)
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log(typeof response.data.data, 'dari respons');
        setProjects(
          response.data.data
        )
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  const handleDelete = () => {
    axios.delete(`http://192.168.1.148/roy/project/${project.id}`)
  }



  return (
    // <Box sx={{p: 5, m: 0, height: '100vh', boxSizing: 'border-box', backgroundColor: '#282c34'}}>
    <Box className='Content'>

        
        <Box
        sx={{
          
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        }}
        >
        <Button variant='contained' endIcon={<AddCircleOutline/>} onClick={handleOpenCreate}>Add Project</Button>

        <Card 
          sx={{mt: 4, width: '100%', minHeight: 250, boxShadow: 3
          }}
        >
          <ProjectTable
            projects={projects}
            handleDelete={handleDelete}
            handleOpenUpdate={handleOpenUpdate}
          />
        </Card>

        </Box>
        <UpdateProject1
          open={open.update}
          handleClose={handleCloseUpdate}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          project={project}
        />
        <PostProject
            open={open.create}
            handleClose={handleCloseCreate}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            project={project}
        />
    </Box>
  )
}

export default ProjectList
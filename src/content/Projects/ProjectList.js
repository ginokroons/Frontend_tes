import { React, useState, useEffect } from 'react';
import '../../App.css'
import { Box, Card } from '@mui/material';
import axios from 'axios';
import ProjectTable from '../../components/ProjectTable';
import PostProject from '../../components/PostProject';


const ProjectList = () => {

  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  

  useEffect(() => {
    console.log(projects)
    const filename = 'aaa.dockerfile'
    console.log(filename.includes('Dockerfile'))
  }, [projects])

  

  useEffect(() => {
    // axios.get(`http://192.168.1.148/roy/project`)
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        console.log(typeof response.data.data, 'dari respons');
        setProjects(
          response.data
        )
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  // const handleUpdate = (event) => {
  //   event.preventDefault()

  //   axios.put(`http://192.168.1.148/roy/project`, {projectname: projectName, description: projectDesc})
  //     .then(response => {
  //       console.log(response.data.data); 
  //     });

  //   handleClose()
  //   console.log(event.target);
  // }

  const handleDelete = () => {
    axios.delete(`http://192.168.1.148/roy/project/`, {ID: projectId})
      .then(response => {
        setProjectId(
          response.data.data
        )
      })
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
          <PostProject
            projectName={projectName}
            setProjectName={setProjectName}
            projectDesc={projectDesc}
            setProjectDesc={setProjectDesc}
          />
          <Card 
            sx={{mt: 4, width: '100%', minHeight: 250, boxShadow: 3
            }}
          >
            <ProjectTable
              projects={projects}
              handleDelete={handleDelete}
            />
          </Card>
        </Box>
    </Box>
  )
}

export default ProjectList
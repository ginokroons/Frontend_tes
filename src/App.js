import './App.css';
import I3gisLayout from './layouts/I3gisLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectList from './content/Projects/ProjectList';
import ProjectDetails from './content/Projects/ProjectDetails';
import FileDetails from './content/File/FileDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<I3gisLayout />}>
          <Route path='project-list'>
            <Route index={true} element={<ProjectList />} />
            <Route path=':projectId' element={<ProjectDetails />} /> {/*A nested route!*/}
          </Route>
          <Route path='project-details'>
            <Route index={true} element={<ProjectDetails />} />
            <Route path=':fileId' element={<FileDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

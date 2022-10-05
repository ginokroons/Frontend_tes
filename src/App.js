import './App.css';
import I3gisLayout from './layouts/I3gisLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProjectList from './content/Projects/ProjectList';
import ProjectDetails from './content/Projects/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<I3gisLayout />}>
          <Route path='project-list'>
            <Route index={true} element={<ProjectList />} />
            <Route path=':projectId' element={<ProjectDetails />} /> {/*A nested route!*/}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

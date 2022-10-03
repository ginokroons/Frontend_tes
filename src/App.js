import './App.css';
import I3gisLayout from './layouts/I3gisLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import ImageScan from './content/ImageScan/ImageScan';
import ConfigurationScan from './content/ConfigurationScan/ConfigurationScan';
import ProjectList from './content/Projects/ProjectList';
import ProjectDetails from './content/Projects/ProjectDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<I3gisLayout />}>
        <Route path='scan-images' element={<ImageScan />} />
        <Route path='configuration-scan' element={<ConfigurationScan />} />
        <Route path='project-list' element={<ProjectList />} />
        <Route path='project-details' element={<ProjectDetails />} />
        <Route path='/' element={<Navigate to='/project-list' replace />} />
      </Route>
    </Routes>
  );
}

export default App;

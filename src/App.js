import './App.css';
import I3gisLayout from './layouts/I3gisLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import ImageScan from './content/ImageScan/ImageScan';
import ConfigurationScan from './content/ConfigurationScan/ConfigurationScan';

function App() {
  return (
    <Routes>
      <Route path='/' element={<I3gisLayout />}>
        <Route path='scan-images' element={<ImageScan />} />
        <Route path='configuration-scan' element={<ConfigurationScan />} />
        <Route path='/' element={<Navigate to='/scan-images' replace />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function I3gisLayout() {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
}

export default I3gisLayout;

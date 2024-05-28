import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeResponsable from './pages/responsable/HomeResponsable';
import RegisterKid from './pages/responsable/RegisterKid';
import SchedulingKid from './pages/responsable/SchedulingKid';
import EditRespProfile from './pages/responsable/EditRespProfile';
import EditKidProfile from './pages/responsable/EditKidProfile';
import HomeMonitor from './pages/monitor/HomeMonitor'
import KidProfile from './pages/monitor/KidProfile'
import EditMonitorProfile from './pages/monitor/EditMonitorProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/HomeResponsable" element={<HomeResponsable/>} />
        <Route path="/RegisterKid" element={<RegisterKid/>} />
        <Route path="/SchedulingKid" element={<SchedulingKid/>} />
        <Route path="/EditRespProfile" element={<EditRespProfile/>} />
        <Route path="/EditKidProfile" element={<EditKidProfile/>} />
        <Route path="/HomeMonitor" element={<HomeMonitor/>} />
        <Route path="/KidProfile" element={<KidProfile/>} />
        <Route path="/EditMonitorProfile" element={<EditMonitorProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
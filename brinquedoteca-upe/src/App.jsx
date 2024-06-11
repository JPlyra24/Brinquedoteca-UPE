import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeResponsable from './pages/responsable/HomeResponsable';
import RegisterKid from './pages/responsable/RegisterKid/RegisterKid';
import SchedulingKid from './pages/responsable/SchedulingKid';
import EditRespProfile from './pages/responsable/EditRespProfile/EditRespProfile';
import EditKidProfile from './pages/responsable/EditKidProfile/EditKidProfile';
import HomeMonitor from './pages/monitor/HomeMonitor'
import KidProfile from './pages/monitor/KidProfile'
import EditMonitorProfile from './pages/monitor/EditMonitorProfile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/homeResponsable" element={<HomeResponsable/>} />
        <Route path="/registerkid" element={<RegisterKid/>} />
        <Route path="/schedulingkid" element={<SchedulingKid/>} />
        <Route path="/editRespprofile" element={<EditRespProfile/>} />
        <Route path="/editKidprofile" element={<EditKidProfile/>} />
        <Route path="/Kidprofile" element={<KidProfile/>} />
        <Route path="/homemonitor" element={<HomeMonitor/>} />
        <Route path="/editmonitorprofile" element={<EditMonitorProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeResponsable from './pages/responsable/HomeResponsable';
import RegisterKid from './pages/responsable/RegisterKid';
import SchedulingKid from './pages/responsable/SchedulingKid';
import EditRespProfile from './pages/responsable/EditRespProfile/EditRespProfile';
import EditKidProfile from './pages/responsable/EditKidProfile/EditKidProfile';
import HomeMonitor from './pages/monitor/HomeMonitor'
import EditMonitorProfile from './pages/monitor/editar-perfil-brinq/EditMonitorProfile'
import KidProfile from './pages/monitor/perfil-criança-brinqq/KidProfile'

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
        <Route path="/editmonitorprofile" element={<EditMonitorProfile/>} />
        <Route path="/homemonitor" element={<HomeMonitor/>} />
        <Route path="/Kidprofile" element={<KidProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
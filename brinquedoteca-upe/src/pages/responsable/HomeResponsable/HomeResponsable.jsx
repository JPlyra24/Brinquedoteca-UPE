import React from 'react';
import './HomeResponsable.css'
import TopBar from '../../../components/TopBar/TopBar';
import YourKids from '../../../components/YourKids/YourKids';
import YourAppointments from '../../../components/YourAppointments/YourAppointments';


const HomeResponsable = () => {
  return (
    <div className='t3-container'>
      <TopBar/>
      <div className='t3-body'>
        <div className='t3-side-1'>
          <YourKids/>
        </div>
        <div className='t3-side-2'> 
          <YourAppointments/>
        </div>
      </div>
    </div>
  );
};

export default HomeResponsable;
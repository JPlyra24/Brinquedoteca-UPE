import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import KidsTodayList from '../../components/KidsTodayList/KidsTodayList';
import HistoricList from '../../components/HistoricList/HistoricList';

const HomeMonitor = () => {
  return (
    <div className='t3-container'>
      <TopBar/>
      <div className='t3-body'>
        <div className='t3-side-1'>
          <KidsTodayList/>
        </div>
        <div className='t3-side-2'> 
          <HistoricList/>
        </div>
      </div>
    </div>
  );
};

export default HomeMonitor;
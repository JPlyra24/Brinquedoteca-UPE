import React from 'react';
import './KidsTodayList.css';
import KidsToday from './KidsToday/KidsToday';

const KidsTodayList = () => {
  return (
    <div className="t8-1-container">
        <div className='t8-1-title-box'>
            <div className="t8-1-title">Crianças hoje:</div>
        </div>
        <div className='t8-1-kids'>
          <KidsToday/>
          <KidsToday/>
          <KidsToday/>
          <KidsToday/>
          <KidsToday/>
          <KidsToday/>
          <KidsToday/>
        </div>
    </div>
  );
};

export default KidsTodayList;

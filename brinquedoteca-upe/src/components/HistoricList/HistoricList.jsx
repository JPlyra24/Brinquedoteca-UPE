import React from 'react';
import './HistoricList.css';
import Historic from './Historic/Historic';

const HistoricList = () => {
  return (
    <div className="t8-2-container">
        <div className='t8-2-title-box'>
            <div className="t8-2-title">Histórico:</div>
        </div>
        <div className='t8-2-kids'>
          <Historic/>
          <Historic/>
          <Historic/>
          <Historic/>
          <Historic/>
          <Historic/>
          <Historic/>
          <Historic/>
          <Historic/>
        </div>
    </div>
  );
};

export default HistoricList;

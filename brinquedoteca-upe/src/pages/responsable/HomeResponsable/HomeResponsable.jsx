import React from 'react';
import MenuBar from './menubar/MenuBar';
import './css.css'
import BookChild from './showChild/BookChild';
import ShowBooked from './showChild/ShowBooked';

const HomeResponsable = () => {
  return (
    <div>
      <MenuBar/>
      <div className='containerNovo'>
        <h1>Sua(s) criança(s):</h1>
        <button className='item'><h1>+</h1></button>
      </div>
      <BookChild/>
      <ShowBooked/>
    </div>
  );
};

export default HomeResponsable;
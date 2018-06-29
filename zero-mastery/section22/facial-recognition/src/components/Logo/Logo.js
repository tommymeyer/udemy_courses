import React from 'react';
import Tilt from "react-tilt";
import brain from './brain.svg';
import './Logo.css'


const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br-100" options={{ reset: false, reverse: true, max: 100 }} style={{ boxShadow: '0px 0px 24px #80d4f6', height: 100, width: 100 }} >
        <div className="Tilt-inner">
          <img src={brain} alt="Brain" />
        </div>
      </Tilt>
    </div>
  )
}


export default Logo;
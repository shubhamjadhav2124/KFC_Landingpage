import { logDOM } from '@testing-library/react'
import React from 'react'
import "./Demo.css"



function Demo() {

  return (
     
    
    <div className='headder'  >
      <div  className='leftlogo'>
       <img className='logo' src='logo.png'></img>
      

      </div>
      <div className='leftnav'>
        <ul className='navname'>
          <li>ABOUT US</li>
          <li>FIND US</li>
          <li>ALL CAMPAIGNS</li>
          <img className='imghead' src='user.png' alt='666666'></img>
          <img  className='imghead1' src='basket.png' alt='666666'></img>

         
          
          
        </ul>
       
      </div>
       
      
    </div>
  );
}

export default Demo;

import React from 'react'

import "./Productcard.css"


const Productcard=({head,para,value,img}) =>{
   
  return (
    <div className='productcar'>
      <div className='rightdiv'>
        <h2>{ head}</h2>
        <p>{para}</p>
        <h3>{value}</h3>
       
        
        


     

    </div>
    <div className='leftdiv'>
        <img src={img} alt='sw'/>
      </div>
      
    </div>
     
  )
};

export default Productcard;


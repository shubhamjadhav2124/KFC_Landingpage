import React from 'react'
import "./Productcard2.css"

const Productcard2=({title1,button,img}) =>{

  

    
  return (
    <div className='product'>
      <div className='product3'>

        <div className='leftdiv'>
          <h2 className='hw'>{title1}</h2>
          <button>{button}</button>
        </div>
        
        <div className='rightdiv'>
          <img src={img}/>
        </div>
      </div>


    </div>

  )
};





export default Productcard2;

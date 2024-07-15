import React from 'react'
import "./Social.css"

  const Social =({img,title,para})=> {
  return (

    <div className='cardso'>
        <div className='lcard'>
            <img src= {img}/>


        </div>
        <div className='rcard'>
            <h3>{title}</h3>
            <p>{ para}</p>
        </div>

    </div>
   
    
    
  )
}

export default Social;
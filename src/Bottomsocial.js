import React from 'react'
import "./Bottomsocial.css"
  const Bottomsocial=({img,img2,title,para})=> {
  return (
    <div className='cardso1'>
        <div className='lcard'>
            <img src= {img}/>


        </div>
        <div className='rcard1'>
            <h3>{title}</h3>
            <p>{ para}</p>
            <img className='img2' src={img2}/>
        </div>

    </div>
    
  )
}
export default Bottomsocial;

import "./Product.css"


import React from 'react'

  
  const Product=({title,img}) =>{

  

    
  return (

<div className="productimg">
  <img className="img1" src={img} alt="{titile}"/>
  <h4> {title} </h4>
  <div className="hover"></div>

</div>
   )
 };
 


export default Product;

import React from 'react'
import "../styles/HotItemCard.css"

const HotItemcard = ({image,index,name,price}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`${index} Product`} />
        <p>{name}</p>
        <span>{price}</span>
        

    </div>
  )
}

export default HotItemcard
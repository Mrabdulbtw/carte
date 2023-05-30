import { useContext } from "react"
import React from 'react'
import { ShopContext } from "../../context/ShopeContext"


export default function Item(props) {

  const { id, price, category, image } = props.data
  const { addCart, ProductData, removCart } = useContext(ShopContext)

  const count = ProductData[id]

  return (
    <div className='select-item' >
      <div className="image-holder">
        <img src={image} alt='' />
      </div>
      <div className="description">
      <div className="price">{price} $</div>
        <div className="name">{category}</div>
        <div className="buttons">
          <button onClick={()=>{
            removCart(id)
          }}
          >-</button>
          <div className="count">{count}</div>
          <button onClick={()=>{
            addCart(id)
          }}>+</button>
        </div>
      </div>

    </div>
  )
}

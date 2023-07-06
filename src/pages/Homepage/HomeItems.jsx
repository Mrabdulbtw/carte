import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/ShopeContext'
import { useNavigate } from 'react-router-dom'



export default function HomeItems(props) {
    const { id, price, image, category } = props.data
    const { addCart, ProductData, view } = useContext(ShopContext)
    const count = ProductData[id]
    const navi = useNavigate()

    return (
        <div className='items'>
            <div className="imge-holder">
                <img src={image} />
            </div>
            <div className="decription">
                <div className="title">{category}</div>
                <div className="prisse"><b>{price} $</b></div>
                <button className='Add-cart' onClick={() => {
                    addCart(id)
                }} >Add to cart {count > 0 && <span>{count}</span>} </button>
                <button onClick={() => {
                   navi(`/viewpage/${id}`)
                }} className='view'>view</button>
            </div>
        </div>
    )

}

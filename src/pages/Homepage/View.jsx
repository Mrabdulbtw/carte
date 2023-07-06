import React from 'react'
import { useState, useEffect } from 'react'
import { API_URL } from '../../apidata'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import "./viewPage.css"


export default function View() {

    const [product, setProduct] = useState()
    const location = useLocation()
    const { id } = useParams()
    const getData = async () => {
        const { data } = await axios.get(API_URL)
        let singleProduct = [...data].find((data) => data.id === Number(id))
        setProduct(singleProduct)

    }



    useEffect(() => {
        getData()
    }, [id])


    return (
        <div className='view-page'>
            <div className="container">
                <div className="right-container">

                    <img src={product?.image} alt="" />
                </div>
                <div className="left-container">
                    <div className="dis">
                        {product?.description}
                    </div>
                    <div className="price">{product?.price} $</div>
                    <div className="name">{product?.category}</div>
                    <strong>{product?.title}</strong>
                </div>
            </div>

        </div>
    )
}

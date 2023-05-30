import React, { useEffect, useState } from 'react'
import { API_URL } from '../../apidata'
import axios from 'axios'
import HomeItems from './HomeItems'
import '../Homepage/cart-project.css'


export default function Home() {

    const [Product, setProduct] = useState([])


    const getApiData = async () => {
        const res = await axios.get(API_URL)
        setProduct(res.data)
         
    }
    useEffect(() => {
        getApiData()

    }, [])


    return (
        <div className='Home-page' >
            <h3>Wellcome our Store</h3>
            <div className="product-items">
                {
                    Product.map((product) => {
                        return <HomeItems data={product} key={product.id}/>
                    })
                }
            </div>

        </div>
    )
}

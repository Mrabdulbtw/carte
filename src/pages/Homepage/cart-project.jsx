import React, { useEffect, useState } from 'react'
import { API_URL } from '../../apidata'
import axios from 'axios'
import HomeItems from './HomeItems'
import '../Homepage/cart-project.css'
import Loading from '../../component/loading'

export default function Home() {

    const [Product, setProduct] = useState([])
    const [load, setLoad] = useState(false)
    const getApiData = async () => {
        setLoad(false)
        const res = await axios.get(API_URL)
        setLoad(true)
        setProduct(res.data)
    }

    useEffect(() => {
        getApiData()
    }, [])


    console.log(load);
    return (


        <div className='home-container'>
            {
                !load ? (
                    <Loading />
                ) : (<div className='Home-page' >
                    <h3>Wellcome our Store</h3>
                    <div className="product-items">
                        {
                            Product.map((product) => {
                                return <HomeItems data={product} key={product.id} />
                            })
                        }
                    </div>

                </div>
                )
            }

        </div>
    )
}

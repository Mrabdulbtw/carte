import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { API_URL } from '../apidata'
import axios from 'axios'

export const ShopContext = createContext(null)



//default data

const getDefaultValue = () => {
    let defaultv = {}
    for (let i = 1; i < 21; i++) {
        defaultv[i] = 0
    }
    return defaultv
}

export default function ShopeContextProvider(props) {




    const [ProductData, setProductData] = useState(getDefaultValue())
    //api data 
    const [Product, setProduct] = useState([])
    const getApiData = async () => {
        const res = await axios.get(API_URL)
        setProduct(res.data)
    }

    useEffect(() => {
        getApiData()

    }, [])

    const getTotal = () => {
        let total = null;
        for (const i in ProductData) {
            if (ProductData[i] > 0) {
                let info = Product.find((pro) => pro.id === Number(i))
                total += Math.round(info.price) * ProductData[i]
            }
        }
        return total;
    }


    const addCart = (itemIt) => {
        setProductData((pre) => ({ ...pre, [itemIt]: pre[itemIt] + 1 }))

    }
    const removCart = (itemIt) => {
        setProductData((pre) => ({ ...pre, [itemIt]: pre[itemIt] - 1 }))

    }

    const contextValue = {
        addCart,
        removCart,
        getTotal,
        ProductData
    }




    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

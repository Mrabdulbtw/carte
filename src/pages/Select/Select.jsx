import React from 'react'
import { API_URL } from '../../apidata'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { ShopContext } from '../../context/ShopeContext'
import Item from './Item'
import '../Select/slelect.css'
import { useNavigate } from 'react-router-dom'

export default function Select() {

  const { ProductData, getTotal, } = useContext(ShopContext)
  const [Product, setProduct] = useState([])


  const navigat = useNavigate()

  const getApiData = async () => {
    const res = await axios.get(API_URL)
    setProduct(res.data)
  }
  useEffect(() => {
    getApiData()

  }, [])
  const tota = getTotal()



  return (
    <div className='select-value'>
      <h2>{tota > 0 ? 'thanks for your order😉' : "emty😟"}</h2>

      <div className="select-value-items">
        {
          Product.map((product) => {
            if (ProductData[product.id] !== 0) {
              return <Item data={product} key={product.id} />
            }
          })
        }
      </div>

      {
        tota > 0 && <div className="total-value">
          <div className="total">total :{tota} $</div>
          <div className="buttons">
            <button>plase order</button>
            <button onClick={() => {
              navigat('/')
            }}>more order</button>
          </div>
        </div>
      }
    </div>
  )
}

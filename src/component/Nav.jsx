import React from 'react'
import '../component/Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='Nav'>
            <div className="tags">
                <Link to='/'>Home</Link>
                <Link to='/select/'><ion-icon name="cart-outline"></ion-icon></Link>
            </div>
        </div>
    )
}

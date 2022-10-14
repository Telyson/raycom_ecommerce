import React from 'react'
import Link from 'next/link'

import { AiOutlineShopping} from 'react-icons/ai'
// import Cart from './cart'
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';


export default function Navbar() {

  const { showCart, setShowCart, totalQuantities} = useStateContext()
  return (
    <div className='navbar-container'>
      <p className="logo">
        <Link href="/">RAYCOM</Link>
      </p>

      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {/* <Cart /> */}
      {/* {showCart && <Cart />} */}
      {showCart && <Cart />}
    </div>
  )
}

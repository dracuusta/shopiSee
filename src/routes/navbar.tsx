import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'
import { FC } from 'react'
export const Navbar:FC=()=>{
    return (
       <div className='navbar'>
            <div className='links flex flex-row-reverse gap-4 pl-10 p-4 border-solid text-white bg-neutral-800'>
                <Link to="/">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
                <Link to="/SignIn">Sign In</Link>
            </div>
       </div>
    )
}
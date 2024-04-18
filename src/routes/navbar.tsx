import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'
import { useContext, useEffect, useState } from 'react'
import { FC } from 'react'
import { signOutUser } from '../utils/firebase/firebase.utils'
import { UserContext } from '../components/context/user.context'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
export const Navbar:FC=()=>{
    const {currentUser,setCurrentUser}:any=useContext(UserContext);
    const [totalQuantity,setTotalQuantity]=useState(0);
    const signOutHandler=async()=>{
        await signOutUser();
       setCurrentUser(null);
    }
    
    const cartItems = useSelector((state:RootState) => {
        return state.shop.cartItems;
    });
    useEffect(()=>{
        let totalQuantity=0;
        cartItems.forEach((cartItem)=>{
            totalQuantity+=cartItem.quantity;
        })
        setTotalQuantity(totalQuantity);
    },[cartItems])
    
    return (
       <div className='navbar flex p-4 justify-between  text-black border-b-2'>
        <div className='banner text-2xl'>
           <Link to="/">SHOPiSEE</Link>
        </div>
            <div className='links flex flex-row'>
                <Link className='w-16 flex justify-center items-center' to="/shop">Shop</Link>
                <Link className='w-16' to="/cart">
                   <div className='flex'> <ShoppingCart size={32}/><div className='flex justify-center pl-1 items-center'>{totalQuantity}</div></div>
                </Link>
                {currentUser?(<button className='w-26 font-sans' onClick={signOutHandler}>Sign Out</button>):
                (<button className='w-16 bg-neutral-800 text-white hover:border-solid hover:bg-white hover:text-black rounded-lg'><Link className='font-sans' to="/Authentication">Login</Link></button>)}
            </div>
       </div>
    )
}
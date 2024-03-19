import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'
import { useContext } from 'react'
import { FC } from 'react'
import { signOutUser } from '../utils/firebase/firebase.utils'
import { UserContext } from '../components/context/user.context'
export const Navbar:FC=()=>{
    const {currentUser,setCurrentUser}:any=useContext(UserContext);
    const signOutHandler=async()=>{
        await signOutUser();
       setCurrentUser(null);
    }
    
    return (
       <div className='navbar'>
            <div className='links flex fixed w-screen flex-row-reverse gap-4  p-4 border-solid text-white bg-neutral-800'>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">
                    <ShoppingCart size={32}/>
                </Link>
                {currentUser?(<button onClick={signOutHandler}>Sign Out</button>):
                (<button><Link to="/Authentication">Sign In</Link></button>)}
            </div>
       </div>
    )
}
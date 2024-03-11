import { useSelector } from "react-redux"
import { CartCard } from "../../components/cartCard";
import { useEffect, useState } from "react";
export const Cart = () => {
    const cartItems = useSelector((state:any) => {
        return state.shop.cartItems;
    });
    const [cartAmount,setCartAmount]=useState(0);

   useEffect(()=>{
    const handleCartAmount=()=>{
        let Cartamount=0;
        cartItems.forEach((cartItem:any)=>{
            Cartamount+=cartItem.quantity*cartItem.storeItem.price;
            console.log(Cartamount);
        })
        console.log(cartItems);
        setCartAmount(Cartamount);
    }
    handleCartAmount();
   },[cartAmount])
    return (
      <div>
        <h2 className="ml-3 text-3xl">Shopping Cart</h2>
        <ul className=" grid grid-cols-4 gap-x-12 ml-2 mr-2">
          {cartItems.length>0?cartItems.map((cartItem:any)=>{
            return <CartCard key={cartItem.storeItem.id} storeItem={cartItem.storeItem} quantity={cartItem.quantity} />
          }):<div className="flex mt-7 ml-2">Nothing to show</div>}
        </ul>
        <div className="totalAmount">Total Amount: {cartAmount}</div>
      </div>
    );
  };
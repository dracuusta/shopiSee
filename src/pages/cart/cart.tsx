import { useSelector } from "react-redux"
import { CartCard } from "../../components/cartCard";
import { useEffect, useState } from "react";
import { RootState } from "../../store";

export const Cart = () => {
    const cartItems = useSelector((state:RootState) => {
        return state.shop.cartItems;
    });
    const [cartAmount,setCartAmount]=useState(0);

   useEffect(()=>{
    const handleCartAmount=()=>{
        let Cartamount=0;
        cartItems.forEach((cartItem)=>{
            Cartamount+=cartItem.quantity*cartItem.storeItem.price;
        })
        Cartamount=Math.floor(Cartamount*100)/100;
        setCartAmount(Cartamount);
    }
    handleCartAmount();
   },[cartAmount,cartItems])

   return (
    <div>
      <h2 className="ml-3 text-3xl pt-8 pb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul className="grid grid-cols-4 gap-x-12 ml-2 mr-2">
          {cartItems.map((cartItem) => {
            return <CartCard key={cartItem.storeItem.id} storeItem={cartItem.storeItem} quantity={cartItem.quantity} />;
          })}
        </ul>
      ) : (
        <div className="flex pl-4 items-center w-full py-10 text-gray-800 text-xl">Nothing added to the Cart</div>
      )}
      <div className="totalAmount flex p-2 font-bold truncate items-center w-full py-10 text-gray-800 text-xl">Total Amount: ${cartAmount}</div>
    </div>
  );}
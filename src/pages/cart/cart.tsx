import { useSelector } from "react-redux"
import { CartCard } from "../../components/cartCard";
export const Cart = () => {
    const cartItems = useSelector((state:any) => {
        console.log(state.shop.cartItems);
        return state.shop.cartItems;
    });
  
    return (
      <div>
        <h2 className="ml-3 text-3xl">Shopping Cart</h2>
        <ul className=" grid grid-cols-4 gap-x-12 ml-2 mr-2">
          {cartItems.size>0?cartItems.map((cartItem:any)=>{
            return <CartCard key={cartItem.storeItem.id} storeItem={cartItem.storeItem} quantity={cartItem.quantity} />
          }):<div className="flex mt-7 ml-2">Nothing to show</div>}
        </ul>
      </div>
    );
  };
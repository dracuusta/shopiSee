import { ShoppingBag } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/storeItemsSlice.js";
import { useState } from "react";
import './card.css'
import { Link } from "react-router-dom";
import { QuantityInput } from "./quantityInput.js";
export interface StoreItem {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
interface CardProps {
  key: number;
  storeItem: StoreItem;
}

export const Card = (props: CardProps) => {
  const [input, setInput] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...props, quantity: input }));
  };

  return (
  
    <div className="Card mt-4 transition duration-150 ease-in-out">
      <div className="item-image m-1 self-center">
      <Link to={`/product/${props.storeItem.id}`}  >
        <div className="border-solid border-2 flex justify-center">
          <img className="w-56 h-80  hover:scale-110 duration-700 p-8" src={props.storeItem.image} />
        </div>
        </Link>
        <div className="firstRow flex justify-between mt-1">
          <div className="title mt-4 truncate max-w-80">{props.storeItem.title}</div>
          <button onClick={handleAddToCart}>
            <ShoppingBag size={24} />
          </button>
        </div>
        <div className="secondRow flex justify-between">
          <div className="price font-bold text-xl ">`$ {props.storeItem.price}`</div>
          <div className="quantity flex justify-end">
            <QuantityInput setInput={setInput}/>
          </div>
        </div>
      </div>
    </div>
  );
};

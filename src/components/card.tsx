import { ShoppingBag } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/storeItemsSlice.js";
import { useState } from "react";

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
    <div className="Card mt-2">
      <div className="item-image m-1">
        <div className="border-solid border-2 flex justify-center">
          <img className="w-56 h-80 p-8" src={props.storeItem.image} />
        </div>
        <div className="firstRow flex justify-between mt-1">
          <div className="title truncate max-w-80">{props.storeItem.title}</div>
          <button onClick={handleAddToCart}>
            <ShoppingBag size={24} />
          </button>
        </div>
        <div className="secondRow flex justify-between">
          <div className="price ">{props.storeItem.price}</div>
          <div className="quantity">
            <input
              value={input}
              className="w-8"
              onChange={(e) => setInput(parseInt(e.target.value))}
              type="number"
              placeholder="quantity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

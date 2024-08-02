import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
interface QuantityInputProps{
setInput:Dispatch<SetStateAction<number>>
}
export const QuantityInput:React.FC<QuantityInputProps>=({setInput}) =>{
    const [input, setInputState] = useState<number>(0);
    useEffect(()=>{
      setInput(input);
    },[input])
    const handleDecrement = () => {
      setInputState((prev:number) => (prev > 0 ? prev - 1 : 0)); 
    };
  
    const handleIncrement = () => {
      setInputState((prev:number) => prev + 1);
    };
  
    return (
      <div className="flex items-center">
        <button 
          className="px-2 py-1 text-black font-sans" 
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          value={input}
          className="w-8 pl-1 text-center font-sans"
          onChange={(e) => setInput(parseInt(e.target.value) || 0)}
          type="number"
          placeholder="quantity"
        />
        <button 
          className="px-2 py-1 rounded-full text-black font-sans" 
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
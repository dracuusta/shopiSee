import { useEffect, useState } from "react";
import { Card } from "../../components/card";
export const Shop = () => {
    const [storeItems,setStoreItems]=useState<any>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((json) => setStoreItems([...json]));
  }, []);
  
  return <div className="shop">
    <div className="shopItems grid grid-cols-4 gap-x-12 ml-2 mr-2">
    {storeItems&&(storeItems.map((storeItem:any)=>{
        return (
            <Card key={storeItem.key} storeItem={storeItem}/>
        )
    }))}
    </div>
  </div>;
};

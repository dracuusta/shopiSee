export interface StoreItem{
    id:number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string
}
interface CardProps{
    key:number,
    storeItem:StoreItem
}
interface CardCartProps{
    key:number,
    storeItem:StoreItem,
    quantity:number
}


export const CartCard=(props:CardCartProps)=>{


    return (
        <div className="Card mt-2">
            <div className="item-image m-1">
                <div className="border-solid border-2 flex justify-center">
                <img className="w-56 h-80 p-8" src={props.storeItem.image}/></div>
                <div className="firstRow flex justify-between mt-1">
                <div className="title truncate max-w-80">{props.storeItem.title}</div>
                </div>
                <div className="secondRow flex justify-between">
                <div className="price ">{props.storeItem.price}</div>
                <div className="quantity">{props.quantity}</div>
                </div>
            </div>
        </div>
    )
}
import { useSelector } from "react-redux"
import { IItem } from "../../Interfaces/IItem"
import { IOrder } from "../../Interfaces/IOrder"

const BasketPage =()=>{
    
  const orderData = useSelector((state:{order:{orderData:IOrder,ordered:boolean}}) => state.order.orderData)
  const orderedItem = useSelector((state:{order:{orderData:IOrder,ordered:boolean,orderedItem:IItem}}) => state.order.orderedItem)
    return(<div>
        <div>
            <div>{orderedItem.Product}</div>
            <div>{orderedItem.RAM}</div>
            <div>{orderedItem.SKU}</div>
            </div>
        <div>
          <div>{orderData.fullName}</div>
        {orderData.address}
        {orderData.city}
        {orderData.country}
        {orderData.email}
        </div>
    </div>)
}

export default BasketPage
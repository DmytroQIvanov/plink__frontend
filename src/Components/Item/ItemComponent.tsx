import { IItem } from "../../Interfaces/IItem"
import { Link } from "react-router-dom";
import './ItemComponent.css'
import { useDispatch } from "react-redux";
import { toOrderItem } from "../../Store/orderSlice";

export const ItemComponent =(props:{Item:IItem})=>{
    const {Item} = props;
  const dispatch = useDispatch()


    return(
        <Link to="/order" className="smth" onClick={()=>{dispatch(toOrderItem(Item))}}>
    <tr>
      <td scope="row">{Item.Product}</td>
      <td>{Item.SKU}</td>
      <td>{Item.RAM}</td>
      <td>{Item.HDD}</td>
      <td>{Item.Price}</td>

    </tr>
    </Link>

    )
}
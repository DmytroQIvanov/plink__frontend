import { IItem } from "../../Interfaces/IItem";
import { Link } from "react-router-dom";
import "./ItemComponent.sass";
import { useDispatch } from "react-redux";
import { toOrderItem } from "../../Store/orderSlice";
import basket from "./assets/basket.svg";

export const ItemComponent = (props: { Item: IItem }) => {
  const { Item } = props;
  const dispatch = useDispatch();

  return (
    <tr className="item-component">
      <td className="item-component__row">{Item.Product}</td>
      <td className="item-component__row">{Item.SKU}</td>
      <td className="item-component__row">{Item.RAM}</td>
      <td className="item-component__row">{Item.HDD}</td>
      <td className="item-component__row">
        {Item.Price}
        <Link
          to="/order"
          onClick={() => {
            dispatch(toOrderItem(Item));
          }}
        >
          <img src={basket} className="" />
        </Link>
      </td>
    </tr>
  );
};

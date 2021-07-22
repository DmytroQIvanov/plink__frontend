import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { IItem } from "../../Interfaces/IItem";
import { IOrder } from "../../Interfaces/IOrder";
import { IOrderSlice } from "../../Interfaces/IOrderSlice";
import "./BacketPage.sass";

const BasketPage = () => {
  const ordered = useSelector((state: IOrderSlice) => state.order.ordered);

  const orderData = useSelector((state: IOrderSlice) => state.order.orderData);
  const orderedItem = useSelector(
    (state: IOrderSlice) => state.order.orderedItem
  );
  if (!ordered) {
    return <Redirect to="/products" />;
  }
  return (
    <main className="backet-page">
      <div className="backet-page__container">
        <header>
          <h1 className="">Product info</h1>
        </header>
        <div className="backet-page__product-info-row">
          <span>Product: </span>
          <div>{orderedItem.Product}</div>
        </div>

        <div className="backet-page__product-info-row">
          <span>HDD: </span>
          <div>{orderedItem.HDD}</div>
        </div>
        <div className="backet-page__product-info-row">
          <span>RAM: </span>
          <div>{orderedItem.RAM}</div>
        </div>
        <div className="backet-page__product-info-row">
          <span>SKU: </span>
          <div>{orderedItem.SKU}</div>
        </div>

        <div className="backet-page__product-info-row">
          <span>Price: </span>
          <div>{orderedItem.Price}</div>
        </div>
      </div>
      <div className="backet-page__container">
        <h1>User info</h1>
        <div className="backet-page__product-info-row">
          <span>Full name: </span>
          <div>{orderData.fullName}</div>
        </div>
        <div className="backet-page__product-info-row">
          <span>Address: </span>
          <div>{orderData.address}</div>
        </div>
        <div className="backet-page__product-info-row">
          <span>City: </span>
          <div>{orderData.city}</div>
        </div>
        <div className="backet-page__product-info-row">
          <span>Country: </span>
          <div>{orderData.country}</div>
        </div>
        <div className="backet-page__product-info-row">
          <span>Email: </span>
          <div>{orderData.email}</div>
        </div>
      </div>
    </main>
  );
};

export default BasketPage;

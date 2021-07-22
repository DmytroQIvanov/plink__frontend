import React, { InputHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { IOrder } from "../../Interfaces/IOrder";
import { IOrderSlice } from "../../Interfaces/IOrderSlice";
import { toOrder } from "../../Store/orderSlice";

const OrderPage = () => {
  const ordered = useSelector((state: IOrderSlice) => state.order.ordered);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    country: "",
    city: "",
    address: "",
  });

  const [message, setMessage] = useState<IOrder>({
    fullName: "",
    email: "",
    country: "",
    city: "",
    address: "",
  });

  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandleFunction = (elem: any) => {
    setData({ ...data, [elem.target.name]: elem.target.value });
  };

  const checkValidData = (elem: any) => {
    setMessage({
      address: "",
      city: "",
      country: "",
      email: "",
      fullName: "",
    });
    if (data.fullName.length == 0) {
      setMessage({ ...message, fullName: "Please enter full name" });
      return;
    }
    if (data.email.length == 0) {
      setMessage({ ...message, email: "Please enter email" });
      return;
    }
    if (data.country.length == 0) {
      setMessage({ ...message, country: "Please enter country" });
      return;
    }
    if (data.city.length == 0) {
      setMessage({ ...message, city: "Please enter full city" });
      return;
    }
    if (data.address.length == 0) {
      setMessage({ ...message, address: "Please enter full address" });
      return;
    }
    dispatch(toOrder(data));
  };
  const onBlurFunction = (elem: any) => {
    if (elem.target.value.length == 0) {
      setMessage({
        address: "",
        city: "",
        country: "",
        email: "",
        fullName: "",
        [elem.target.name]: "The field is empty",
      });
    }
    if (elem.target.value.length > 0) {
      setMessage({
        ...message,
        [elem.target.name]: "",
      });
    }
  };

  const orderedItem = useSelector(
    (state: IOrderSlice) => state.order.orderedItem
  );
  if (!orderedItem.Product) {
    return <Redirect to="/main" />;
  }
  if (ordered) {
    return <Redirect to="/basket" />;
  }

  return (
    <div>
      <div className="container-md">
        <div className="input-group mt-3 ">
          {message.fullName && (
            <span className="input-group-text bg-danger text-white">
              {message.fullName}
            </span>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Full name
            </span>
            <input
              type="text"
              className={`form-control ${message.fullName && "is-invalid"} `}
              placeholder="Dmytro Ivanov"
              aria-describedby="basic-addon1"
              name="fullName"
              value={data.fullName}
              onChange={onHandleFunction}
              onBlur={onBlurFunction}
            />
          </div>
        </div>

        <div className="input-group mb-3">
          {message.email && (
            <span className="input-group-text bg-danger text-white">
              {message.email}
            </span>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Email
            </span>
            <input
              type="text"
              className={`form-control ${message.email && "is-invalid"} `}
              placeholder="emailforexample@gmail.com"
              aria-describedby="basic-addon1"
              onBlur={onBlurFunction}
              name="email"
              value={data.email}
              onChange={onHandleFunction}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          {message.country && (
            <span className="input-group-text bg-danger text-white">
              {message.country}
            </span>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Country
            </span>
            <input
              type="text"
              className={`form-control ${message.country && "is-invalid"} `}
              onBlur={onBlurFunction}
              placeholder="Ukraine"
              aria-describedby="basic-addon1"
              name="country"
              value={data.country}
              onChange={onHandleFunction}
            />
          </div>
        </div>

        <div className="input-group mb-3">
          {message.city && (
            <span className="input-group-text bg-danger text-white">
              {message.city}
            </span>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              City
            </span>
            <input
              type="text"
              className={`form-control ${message.city && "is-invalid"} `}
              onBlur={onBlurFunction}
              placeholder="Kyev"
              aria-describedby="basic-addon1"
              name="city"
              value={data.city}
              onChange={onHandleFunction}
            />
          </div>
        </div>

        <div className="input-group mb-3 ">
          {message.address && (
            <span className="input-group-text bg-danger text-white">
              {message.address}
            </span>
          )}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Address
            </span>
            <input
              type="text"
              className={`form-control ${message.address && "is-invalid"} `}
              placeholder=""
              onBlur={onBlurFunction}
              aria-describedby="basic-addon1"
              name="address"
              value={data.address}
              onChange={onHandleFunction}
            />
          </div>
        </div>

        <div className="mb-3">
          <button
            className="btn-dark"
            onClick={(elem) => {
              checkValidData(elem);
            }}
          >
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

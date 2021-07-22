import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemComponent } from "../../Components/Item/ItemComponent";
import { Loader } from "../../Components/Loader/Loader";
import { IItem } from "../../Interfaces/IItem";
import { IOrderSlice } from "../../Interfaces/IOrderSlice";
import { getGoodsStart } from "../../Store/orderSlice";
import "./GoodsPage.sass";

const Goods = () => {
  const dispatch = useDispatch();

  enum Category {
    Product = "Product",
    SKU = "SKU",
    RAM = "RAM",
    HDD = "HDD",
    Price = "Price",
  }
  const goodsArray = useSelector((state: IOrderSlice) => state.order.goods);
  const loading = useSelector((state: IOrderSlice) => state.order.loading);

  const [SortData, setSortData] = useState<Category>(Category.Product);
  const [SortDataDirection, setSortDataDirection] = useState<Boolean>(true);

  //---useEffects---

  useEffect(() => {
    dispatch(getGoodsStart());
  }, []);

  //SortData
  useEffect(() => {
    const result: IItem[] = goodsArray.slice().sort((a, b) => {
      if (a[SortData] == b[SortData]) return 0;
      if (SortDataDirection) {
        return a[SortData] < b[SortData] ? 1 : -1;
      } else {
        return a[SortData] < b[SortData] ? -1 : 1;
      }
    });
    setSortedArray(result);
  }, [SortData, SortDataDirection, goodsArray]);

  const [SortedArray, setSortedArray] = useState<IItem[]>([]);

  const SortDirection = (CategoryItem: Category) => {
    if (SortData == CategoryItem) {
      SortDataDirection
        ? setSortDataDirection(false)
        : setSortDataDirection(true);
    } else {
      setSortData(CategoryItem);
      setSortDataDirection(true);
    }
  };

  const arrow = `goods-page__arrow-img ${SortDataDirection ? "UP" : "DOWN"}`;

  if (loading) return <Loader />;

  return (
    <main className="goods-page">
      <table className="table table-hover">
        <thead>
          <tr>
            <th
              className={`${SortData == Category.Product && arrow}`}
              onClick={() => {
                SortDirection(Category.Product);
              }}
            >
              Product
            </th>

            <th
              className={`${SortData == Category.SKU && arrow}`}
              onClick={() => {
                SortDirection(Category.SKU);
              }}
            >
              SKU
            </th>

            <th
              className={`${SortData == Category.RAM && arrow}`}
              onClick={() => {
                SortDirection(Category.RAM);
              }}
            >
              RAM
            </th>

            <th
              className={`${SortData == Category.HDD && arrow}`}
              onClick={() => {
                SortDirection(Category.HDD);
              }}
            >
              HDD
            </th>

            <th
              className={`${SortData == Category.Price && arrow}`}
              onClick={() => {
                SortDirection(Category.Price);
              }}
            >
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {/* --ITEMS-- */}
          {SortedArray.map((elem) => (
            <ItemComponent Item={elem} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Goods;

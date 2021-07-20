import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ItemComponent } from "../../Components/Item/ItemComponent"
import { IItem } from "../../Interfaces/IItem"
import './GoodsPage.sass'

const Goods =()=>{

    const goodsArray = useSelector((state:{order:{ordered:boolean,goods:IItem[]}}) => state.order.goods)
    enum Direction {
        Product = "Product",
        SKU ="SKU",
        RAM ="RAM",
        HDD ="HDD",
        Price ="Price"
      }

    const [filterData,setFilterData] =useState<Direction>(Direction.Product)
    const [filteredArray,setFilteredArray] =useState<IItem[]>([])
    useEffect(()=>{
        const result:IItem[] = goodsArray.slice().sort((a,b)=>{
            if (a[filterData] == b[filterData]) return 0;
            return a[filterData] < b[filterData] ? -1 : 1;
        })
        setFilteredArray(result)
    },[filterData])
    return(<div className="goods-page">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope={`col ${filterData==Direction.Product && "goods-page__arrow-img"}`} onClick={()=>{setFilterData(Direction.Product)}}>Product</th>
                    <th scope={`col ${filterData==Direction.SKU && "goods-page__arrow-img" }`} onClick={()=>{setFilterData(Direction.SKU)}}>SKU</th>
                    <th scope={`col ${filterData==Direction.RAM && "goods-page__arrow-img"}`} onClick={()=>{setFilterData(Direction.RAM)}}>RAM</th>
                    <th scope={`col ${filterData==Direction.HDD && "goods-page__arrow-img"}`} onClick={()=>{setFilterData(Direction.HDD)}}>HDD</th>
                    <th scope={`col ${filterData==Direction.Price && "goods-page__arrow-img"}`} onClick={()=>{setFilterData(Direction.Price)}}>Price</th>
                </tr>
            </thead>
            <tbody>
                
        {filteredArray.map(elem=><ItemComponent Item={elem} />)}

           
  </tbody>
</table>

    </div>)
}

export default Goods
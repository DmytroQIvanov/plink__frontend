import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ItemComponent } from "../../Components/Item/ItemComponent"
import { IItem } from "../../Interfaces/IItem"
import { IOrderSlice } from "../../Interfaces/IOrderSlice"
import { getGoodsStart } from "../../Store/orderSlice"
import './GoodsPage.sass'

const Goods =()=>{

    enum Category {
        Product = "Product",
        SKU ="SKU",
        RAM ="RAM",
        HDD ="HDD",
        Price ="Price"
      }
      enum Direction {
          UP="UP",
          DOWN="DOWN"
      }
    const goodsArray = useSelector((state:IOrderSlice) => state.order.goods)
    const loading = useSelector((state:IOrderSlice) => state.order.loading)
    
    const [SortData,setSortData] =useState<Category>(Category.Product)
    const [SortDataDirection,setSortDataDirection] =useState<Direction>(Direction.UP)
    
    //---useEffects---
    useEffect(()=>{
        dispatch(getGoodsStart())
    },[])

    //SortData
    useEffect(()=>{
        const result:IItem[] = goodsArray.slice().sort((a,b)=>{
            if (a[SortData] == b[SortData]) return 0;
            if(SortDataDirection ==Direction.UP){
            return a[SortData] < b[SortData] ? -1 : 1;
        }else{
            return a[SortData] < b[SortData] ? 1 : -1;
        }

        })
        setSortedArray(result)
    },[SortData,SortDataDirection,goodsArray])

     const dispatch = useDispatch()


    const [SortedArray,setSortedArray] =useState<IItem[]>([])

    const SortDirection =(CategoryItem:Category)=>{
        if(SortData==CategoryItem){
            if(SortDataDirection==Direction.UP){
            setSortDataDirection(Direction.DOWN)
            }else{setSortDataDirection(Direction.UP)}
        }else{
        setSortData(CategoryItem)
        setSortDataDirection(Direction.UP)
        }
    }

  
    const arrow =`goods-page__arrow-img ${SortDataDirection==Direction.UP?"UP":"DOWN"}`;
    return(
    <div className="goods-page">
         {loading&&<div className="spinner-grow position-absolute top-1 end-0" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className={`${SortData==Category.Product && arrow}`} 
                    onClick={()=>{
                        SortDirection(Category.Product)
                        }}>
                        Product
                    </th>

                    <th className={`${SortData==Category.SKU && arrow}`} 
                    onClick={()=>{
                        SortDirection(Category.SKU)

                    }}>
                        SKU
                    </th>
                    
                    <th className={`${SortData==Category.RAM && arrow}`} 
                    onClick={()=>{
                        SortDirection(Category.RAM)

                    }}>
                        RAM
                    </th>
                    
                    <th className={`${SortData==Category.HDD && arrow}`} 
                    onClick={()=>{
                        SortDirection(Category.HDD)

                    }}>
                        HDD
                    </th>
                    
                    <th className={`${SortData==Category.Price && arrow}`} 
                    onClick={()=>{
                        SortDirection(Category.Price)
                    }}>
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>

                {/* --ITEMS-- */}
        {SortedArray.map(elem=><ItemComponent Item={elem} />)}

           
  </tbody>
</table>

    </div>)
}

export default Goods
import { IItem } from './IItem';

export interface IOrderSlice {
    order:{
        orderData:any,
        ordered:boolean,
        orderedItem:IItem,
        loading:boolean,
        goods:IItem[]
    }
}
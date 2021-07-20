import { IItem } from './../Interfaces/IItem';
import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../Interfaces/IOrder";



const orderSlice = createSlice({
    name: "order",
    initialState:{
        orderData:<IOrder>{
        fullName:"",
        email:'',
        country:'',
        city:'',
        address:'',
        },
        ordered:false,
        goods:<IItem[]>[
            {Product:`Lenovo IC-512`,SKU:`ZC11501`,RAM:4,HDD:512,Price:550,},
        {Product:`HP Megabook 14`,SKU:`ZC12001`,RAM:2,HDD:240,Price:420,},
        {Product:`Lenovo IC-520`,SKU:`ZC22004`,RAM:8,HDD:1024,Price:600,},
        {Product:`Asus ThinkPad 15-1554`,SKU:`ZC15030`,RAM:16,HDD:1024,Price:700,},
        {Product:`Asus ThinkPad 14-254`,SKU:`ZX5467`,RAM:8,HDD:240,Price:520,},
        {Product:`HP Elitebook 15`,SKU:`ZXC5460`,RAM:12,HDD:515,Price:889,}
        ],
        orderedItem:<IItem>{},
        loading:false,

    },
    reducers:{
        toOrderItem(state,action){
            state.orderedItem=action.payload
        },
        toOrder(state,action){
            state.orderData=action.payload
            state.ordered=true
        }
    }
})

export const { toOrder,toOrderItem } = orderSlice.actions

export default orderSlice.reducer
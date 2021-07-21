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
        goods:<IItem[]>[],
        orderedItem:<IItem>{},
        loading:false,

    },
    reducers:{
        getGoodsStart(state){
            state.loading=true

        },
        getGoodsSuccess(state,action){
            state.goods = action.payload
            state.loading=false

        },
        getGoodsError(state,action){
            state.loading=false

        },
        toOrderItem(state,action){
            state.orderedItem=action.payload
        },
        toOrder(state,action){
            state.orderData=action.payload
            state.ordered=true
        }
    }
})

export const { toOrder,toOrderItem, getGoodsStart,getGoodsError,getGoodsSuccess } = orderSlice.actions

export default orderSlice.reducer
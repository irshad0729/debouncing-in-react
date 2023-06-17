import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducer:{
        addToCart:(state,action)=>{
            state.items.push(action.payload)
        },
        removeFromCart:(state)=>{
            state.items.pop()
        }

    }
})

export const {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer
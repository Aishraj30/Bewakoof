import { createSlice } from "@reduxjs/toolkit";
import { removeItem } from "motion";

const Cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      state.push(action.payload);
    },
    RemoveItem: (state,action)=>{
         return state.filter((item)=>item.image!==action.payload)
    }
     
  }
});

export const { AddItem , RemoveItem } = Cartslice.actions;

export default Cartslice.reducer;

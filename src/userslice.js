import { createSlice} from '@reduxjs/toolkit';
export const userslice=createSlice({
    name:"name",initialState:{
   
       name:"header ",
       food :"footer"
    },
    reducers:
    {
        change:(state,action)=>{
            state.name=action.payload.name;
            state.food=action.payload.name;
   
            

        }
    }

});
export const{change }=userslice.actions;
export default userslice.reducer;
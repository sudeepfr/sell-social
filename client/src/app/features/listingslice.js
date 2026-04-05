import {createSlice} from '@reduxjs/toolkit'
import { dummyListings } from '../../assets/assets'


const listingslice=createSlice({
     name:"listing",
     initialState:{
        listings: dummyListings,
        userListings:dummyListings,
        balance:{
            earned:0,
            withdrawn:0,
            available: 0,

        }
     },
     reducers:{
         setListings: (state,action)=>{
            state.listings=action.payload;
         }
     }
})


export const {setListings} =listingslice.actions;
export default listingslice.reducer;
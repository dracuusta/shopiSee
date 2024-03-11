import { configureStore } from "@reduxjs/toolkit";
import storeItemSliceReducer from './redux/storeItemsSlice' 

export const store=configureStore(
    {
        reducer:{
            shop:storeItemSliceReducer
        },
    }
);
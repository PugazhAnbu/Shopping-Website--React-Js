import { combineReducers } from "redux";

import { productReducer, selectedReducer } from "../redux/reducer/product_Reducer";

export const rootReducer = combineReducers(
    {
        allProducts: productReducer,
        product: selectedReducer,
    }
);
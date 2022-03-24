
import { ActionTypes } from "../constants/action-type";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selected_Products = (selected_product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: selected_product,
    }
};

export const remove_selected_products = (remove_product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    }
};
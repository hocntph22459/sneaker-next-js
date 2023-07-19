import { FETCH_PRODUCTS_FAILED, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../../contants/products/products.type";
import { IProduct } from "../../../interfaces/product";


export const FetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
});

export const FetchProductsSuccess = (products: IProduct[]) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
});

export const FetchProductsFailure = (error: any) => ({
    type: FETCH_PRODUCTS_FAILED,
    payload: error,
});


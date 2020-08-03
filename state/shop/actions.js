import shopDuck from "state/shop";
import * as types from "state/shop/types";

export const requestSections = shopDuck.createAction(types.SECTIONS_REQUEST);
export const successSections = shopDuck.createAction(types.SECTIONS_SUCCESS);
export const failureSections = shopDuck.createAction(types.SECTIONS_FAILURE);

export const requestProducts = shopDuck.createAction(types.PRODUCTS_REQUEST);
export const successProducts = shopDuck.createAction(types.PRODUCTS_SUCCESS);
export const failureProducts = shopDuck.createAction(types.PRODUCTS_FAILURE);

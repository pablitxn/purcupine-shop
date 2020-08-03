// Redux Ducks
import shopDuck from "state/shop";

export const SECTIONS_REQUEST = shopDuck.defineType("SECTIONS_REQUEST");
export const SECTIONS_SUCCESS = shopDuck.defineType("SECTIONS_SUCCESS");
export const SECTIONS_FAILURE = shopDuck.defineType("SECTIONS_FAILURE");

export const PRODUCTS_REQUEST = shopDuck.defineType("PRODUCTS_REQUEST");
export const PRODUCTS_SUCCESS = shopDuck.defineType("PRODUCTS_SUCCESS");
export const PRODUCTS_FAILURE = shopDuck.defineType("PRODUCTS_FAILURE");

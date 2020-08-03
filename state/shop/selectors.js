// Redux
import { createSelector } from "reselect";

// Reducers
const ShopReducer = ({ Shop }) => Shop;

export const sectionsSelector = createSelector([ShopReducer], Shop => Shop.sections);
export const productsSelector = createSelector([ShopReducer], Shop => Shop.products);

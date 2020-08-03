// Common
import { httpModule } from "common/http";

export const getSections = (token) => httpModule.get("shop/products", token);

export const getProducts = (token) => httpModule.get("shop/sections", token);

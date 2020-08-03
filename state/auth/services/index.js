// Common
import httpModule from "common/http";

export const getActiveUser = (token) => httpModule.get("active-user", token);

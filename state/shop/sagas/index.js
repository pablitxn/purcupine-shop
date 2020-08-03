// Sagas
import overviewSagas from "./overview.sagas";
import reviewSagas from "./preview.sagas";

export const sagas = [...overviewSagas, ...reviewSagas];

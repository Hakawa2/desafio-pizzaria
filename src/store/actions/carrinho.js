import * as actionTypes from "./actionsTypes";

export const addCarrinho = (produto) => ({
  type: actionTypes.ADD_CARINHO,
  payload: produto,
});

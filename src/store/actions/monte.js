import * as actionTypes from "../actions/actionsTypes";

export const addIngrediente = (ingrediente, action) => ({
  type: action,
  payload: ingrediente,
});

export const montarPizza = () => ({
  type: actionTypes.MONTAR_PIZZA,
});

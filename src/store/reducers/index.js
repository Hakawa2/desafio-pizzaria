import { combineReducers } from "redux";
import carrinhoReducer from "./carrinho";
import monteReducer from "./monte";

export default combineReducers({
  carrinho: carrinhoReducer,
  monte: monteReducer,
});

import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  produtos: [],
  precoTotal: null,
  bonusFidelidade: null,
};

const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARINHO:
      return {
        ...state,
        produtos: [...state.produtos, action.payload],
        precoTotal: state.precoTotal + action.payload.preco,
        bonusFidelidade: action.payload.bonus
          ? state.bonusFidelidade + action.payload.bonus
          : state.bonusFidelidade,
      };
    default:
      return state;
  }
};

export default carrinhoReducer;

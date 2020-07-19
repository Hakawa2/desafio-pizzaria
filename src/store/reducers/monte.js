import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  pizzaMontada: null,
  ingredientes: {
    borda: null,
    tamanho: null,
    pedacos: null,
    recheio: null,
    nome: "Pizza Montada",
    imgUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/60/fe/99/snap-custom-pizza-salads.jpg",
  },
  precoTotal: null,
};

const monteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BORDA:
      return {
        ...state,
        precoTotal: state.precoTotal + action.payload.preco,
        ingredientes: {
          ...state.ingredientes,
          borda: action.payload.tipo,
        },
      };
    case actionTypes.ADD_TAMANHO:
      return {
        ...state,
        precoTotal: state.precoTotal + action.payload.preco,
        ingredientes: {
          ...state.ingredientes,
          tamanho: action.payload.tipo,
          pedacos: action.payload.pedacos,
        },
      };
    case actionTypes.ADD_RECHEIO:
      return {
        ...state,
        precoTotal: state.precoTotal + action.payload.preco,
        ingredientes: {
          ...state.ingredientes,
          recheio: action.payload.tipo,
        },
      };
    case actionTypes.MONTAR_PIZZA:
      return {
        ...state,
        pizzaMontada: {
          ...state.ingredientes,
          preco: state.precoTotal,
        },
        ingredientes: {},
      };
    default:
      return state;
  }
};

export default monteReducer;

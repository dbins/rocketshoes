import produce from 'immer';

/**
 * ACTION TYPES
 */

export const Types = {
  ADD_REQUEST: "carrinho/ADD_REQUEST",
  ADD_SUCCESS: "carrinho/SUCCESS",
  ADD_FAILED: "carrinho/ADD_FAILED",
  REMOVE: "carrinho/REMOVE",
  UPDATE_AMOUNT_REQUEST: "carrinho/UPDATE_AMOUNT_REQUEST",
  UPDATE_AMOUNT_SUCCESS: "carrinho/UPDATE_AMOUNT_SUCCESS",
  UPDATE_AMOUNT_FAILED: "carrinho/UPDATE_AMOUNT_FAILED",
  CLEAR: "carrinho/CLEAR",
};

/**
 * REDUCERS
 */

const INITIAL_STATE = [];


export default function carrinho(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return produce(state, draft => {
        const { product } = action.payload;

        draft.push(product);
      });

    case Types.REMOVE:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case Types.UPDATE_AMOUNT_REQUEST: {
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.payload.id);

        if (product) {
          product.loading = true;
        }
      });
    }

    case Types.UPDATE_AMOUNT_SUCCESS: {
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.payload.id);

        if (product) {
          product.amount = Number(action.payload.amount);
          product.loading = false;
        }
      });
    }

    case Types.UPDATE_AMOUNT_FAILED: {
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.payload.id);

        if (product) {
          product.error = action.payload.error;
          product.loading = false;
        }
      });
    }

    case Types.CLEAR:
      return [];

    default:
      return state;
  }
}


/**
 * ACTION CREATORS
 */

export const Creators = {
  addToCartRequest: id => ({
    type: Types.ADD_REQUEST,
    payload: { id }
    
  }),
  addToCartSuccess: product => ({
    type: Types.ADD_SUCCESS,
    payload: { product }
  }),
  addToCartFailed: id => ({
    type: Types.ADD_FAILED,
    payload: { id }
  }),
  removeFromCart: id => ({
    type: Types.REMOVE,
    payload: { id }
    
  }),
  updateAmountRequest: (id, amount) => ({
    type: Types.UPDATE_AMOUNT_REQUEST,
    payload: { id, amount }
  }),
  updateAmountSuccess: (id, amount) => ({
    type: Types.UPDATE_AMOUNT_SUCCESS,
    payload: { id, amount }
  }),
  updateAmountFailed: (id, error) => ({
    type: Types.UPDATE_AMOUNT_FAILED,
    payload: { id, error }
  }),
  carrinhoClear: data => ({
    type: Types.CLEAR,
    payload: { data }
  })
};


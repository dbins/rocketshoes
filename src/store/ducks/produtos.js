import produce from 'immer';
/**
 * ACTION TYPES
 */

export const Types = {
  FETCH_REQUEST: "produtos/REQUEST",
  FETCH_SUCCESS: "produtos/SUCCESS",
  FETCH_FAILED: "produtos/FAILURE",
  FETCH_SEARCH_REQUEST: "produtos/REQUEST_SEARCH",
  FETCH_SEARCH_SUCCESS: "produtos/REQUEST_SEARCH_SUCCESS",
  FETCH_SEARCH_FAILED: "produtos/REQUEST_SEARCH_FAILED"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  isFetching: false, isFetchingSearch: false, data: [], search:[], error: null, error_search: null  
};

export default function produtos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_REQUEST:
      return produce(state, draft => {
        draft.isFetching = true;
        draft.data = [];
        draft.error = null;
      });

    case Types.FETCH_SUCCESS:
      return produce(state, draft => {
        draft.isFetching = false;
        draft.data = action.payload.products;
        draft.error = null;
      });

    case Types.FETCH_FAILED:
      return produce(state, draft => {
        draft.isFetching = false;
        draft.data = [];
        draft.error = action.payload.error;
      });

      case Types.FETCH_SEARCH_REQUEST:
      return produce(state, draft => {
        draft.isFetchingSearch = true;
        draft.search = [];
        draft.error = null;
      });

      case Types.FETCH_SEARCH_SUCCESS:
      return produce(state, draft => {
        draft.isFetchingSearch = false;
        draft.search = action.payload.products;
        draft.error_search = null;
      });

    case Types.FETCH_SEARCH_FAILED:
      return produce(state, draft => {
        draft.isFetchingSearch = false;
        draft.search = [];
        draft.error_search = action.payload.error;
      });
  

  
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */


export const Creators = {
  fetchRequest: () => ({
    type: Types.FETCH_REQUEST,
    
  }),
  fetchSuccess: products => ({
    type: Types.FETCH_SUCCESS,
    payload: { products }
  }),
  fetchFailed: error => ({
    type: Types.FETCH_FAILED,
    payload: { error }
  }),
  fetchSearchRequest: (search) => ({
    type: Types.FETCH_SEARCH_REQUEST,
    payload: { search }
    
  }),
  fetchSearchSuccess: products => ({
    type: Types.FETCH_SEARCH_SUCCESS,
    payload: { products }
  }),
  fetchSearchFailed: error => ({
    type: Types.FETCH_SEARCH_FAILED,
    payload: { error }
  })
};

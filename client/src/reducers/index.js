import * as actions from '../actions'

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export const fetchCheesesReducer = (state=initialState, action) => {
    if(action.type === actions.FETCH_CHEESES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    else if(action.type === actions.FETCH_CHEESES_SUCCESS) {
        return Object.assign({}, state, {
            cheeses: [...state.cheeses, action.cheeses],
            loading: false,
            error: null
        });
    }
    else if(action.type === actions.FETCH_CHEESES_ERROR){
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
}

import types from '../actions/types';

const DEFAULT_STATE = {
    categoryName: [],
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_CATEGORY_LIST: 
        console.log(action.payload)
            return { ...state, categoryName: action.payload}
        default:
            return state;
    }
}
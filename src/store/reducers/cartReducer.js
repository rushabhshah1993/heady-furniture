import * as actions from './../actions/actionTypes';

import { cloneDeep } from 'lodash';

const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_TO_CART: {
            let items = cloneDeep(state.items);
            items.push(action.product);
            return {
                ...state,
                items: items
            }
        }
        default: return state;
    }
}

export default reducer;

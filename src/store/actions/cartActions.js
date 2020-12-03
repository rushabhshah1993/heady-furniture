import * as actions from './actionTypes';

export const addToCart = product => {
    return {
        type: actions.ADD_TO_CART,
        product: product
    }
}

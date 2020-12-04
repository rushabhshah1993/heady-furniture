import * as actionTypes from './../actions/actionTypes';

const initalState = {
    navItems: [
        {
            name: "Details",
            id: 'details'
        },
        {
            name: "Description",
            id: 'description'
        },
        {
            name: "Reviews",
            id: 'reviews'
        },
        {
            name: "Related",
            id: 'related'
        }
    ],
    sectionsDimensions: []
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case actionTypes.SET_SECTIONS_DIMENSIONS:
            return {
                ...state,
                sectionsDimensions: action.sections
            }
        default: return state;
    }
}

export default reducer;

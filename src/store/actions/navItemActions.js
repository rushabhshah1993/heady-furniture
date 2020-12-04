import * as actionTypes from './actionTypes';

export const setSectionsDimensions = sections => {
    return {
        type: actionTypes.SET_SECTIONS_DIMENSIONS,
        sections: sections
    }
}

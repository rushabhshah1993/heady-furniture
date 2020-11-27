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
    ]
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;
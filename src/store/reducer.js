const initState = {
    count: 0,
    random: Math.random(),
};

function reducer(state = initState, action) {
    switch (action.type) {
        case "increase":
            return {
                ...state,
                count: state.count + 1,
            };
        case "random":
            return {
                ...state,
                random: Math.random(),
            };
        default:
            return state;
    }
}

export default reducer;

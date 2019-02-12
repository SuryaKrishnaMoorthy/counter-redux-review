const initialState = {
    counter: 0
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter+1};
        case 'DECREMENT':
            return {...state, counter: state.counter-1};
        case 'ADD5':
            return {...state, counter: state.counter+5};
        case 'SUBTRACT5':
            return {...state, counter: state.counter-5};
        default:
            return state;
    }

}

export default reducer;
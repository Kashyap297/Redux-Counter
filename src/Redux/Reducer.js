const INITIAL_VALUE = {
    count: 0,
    name: "kashyap"
}

const counterReducer = (state = INITIAL_VALUE, action) => {
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 10, name: action.payload }
    } if (action.type == "DECREMENT") {
        return { ...state, count: state.count - 5, name: action.payload }
    }
    return state
}

export default counterReducer
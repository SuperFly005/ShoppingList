import { INSERT_NEW_TASK } from "./constants";

const initialState = {
    tasks: []
}


const shoppingReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case INSERT_NEW_TASK:
            return {
                tasks: [ ...state.tasks, payload.task ]
            }
        default:
            return {
                ...state
            }
    }
}

export default shoppingReducer
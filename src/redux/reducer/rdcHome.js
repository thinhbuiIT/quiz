import { SET_CATEGORY, SET_QUIZ } from "../actions/actHome"

const initialState = {
    category: [],
    quiz: []
}

const rdcHome = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_QUIZ:
            return {
                ...state,
                quiz: action.payload
            }
        default:
            return state
    }
}

export default rdcHome
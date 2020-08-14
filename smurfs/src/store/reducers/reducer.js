import { FETCH_SMURF } from '../actions/actions'

const initialState = {
    name: '',
    age: 0,
    height: '',
    id: 0
}
export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                name: action.payload.name,
                age: action.payload.age,
                height: action.payload.height,
                id: action.payload.id
            }
        default:
            return state
    }
}
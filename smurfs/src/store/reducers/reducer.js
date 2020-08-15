import { GET_SMURF_SUCCESS } from '../actions/action'

const initialState = {
    name: '',
    age: null,
    height: '',
    id: null
}
export const reducer = (state =initialState, action) => {
    switch (action.type) {
        case GET_SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload
            }

        default:
            return state
    }
}
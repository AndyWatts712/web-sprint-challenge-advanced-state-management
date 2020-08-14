import { FETCH_SMURF, SUBMIT_SMURF } from '../actions/actions'

const initialState = {
    smurfs: []
}
export const reducer = (state = initialState, action) => {
    console.log('ACTION', action.payload)

    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                smurfs: action.payload
            }

        case SUBMIT_SMURF:
            return {
                ...state,
                smurfs: action.payload
            }

        default:
            return state
    }
}

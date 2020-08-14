import axios from 'axios'
export const FETCH_SMURF = 'FETCH_SMURF'
export const SUBMIT_SMURF = 'SUBMIT_SMURF'
export const fetchSmurf = () => (dispatch) =>{

    axios
        .get('http://localhost:3333/smurfs')
        .then((resp) => {
            dispatch({type: FETCH_SMURF, payload: resp.data})
        })
        .catch((err) => console.log(err))
}

export const postSmurf = (input) => (dispatch) => {
    axios
    .post('http://localhost:3333/smurfs', input)
    .then(res => {
        dispatch({type:SUBMIT_SMURF, payload: res.data})})
    .catch((err) => console.log(err))
}

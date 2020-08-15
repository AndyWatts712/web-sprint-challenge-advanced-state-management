import axios from 'axios'

export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS'

export const fetchSmurf = () => (dispatch) => {
    axios
        .get('http://localhost:3333/smurfs')
        .then((resp) => {
            console.log('AXIOS', resp.data)
            dispatch({type: GET_SMURF_SUCCESS, payload: resp.data})})
        .catch((err) => console.log(err))

}
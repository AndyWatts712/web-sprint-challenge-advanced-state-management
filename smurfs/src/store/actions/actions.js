import axios from 'axios'
export const FETCH_SMURF = 'FETCH_SMURF'

export const fetchSmurf = () => (dispatch) =>{

    axios
        .get('http://localhost:3333/smurfs')
        .then((resp) => {
            dispatch({type: FETCH_SMURF, payload: resp.data})
            console.log(resp.data)
        })
        .catch((err) => console.log(err))
}

const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
      next(action);
    } else if (typeof action === "function") {
      action(store.dispatch);
    }
  };

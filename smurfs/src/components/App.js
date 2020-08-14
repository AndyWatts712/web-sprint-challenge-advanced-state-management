import React, { useEffect } from "react";
import { SmurfList } from './SmurfList'
import { fetchSmurf } from '../store/actions/actions'

import "./App.css";


export function App() {
fetchSmurf()
  // useEffect(()=> {
  //   fetchSmurf()
  // }, [])

    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>
          <SmurfList />
        </div>
      </div>
    );
  
}

export default App;

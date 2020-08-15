import React, { useEffect } from "react";
import "./App.css";
import { SmurfList } from './SmurfList'
import { fetchSmurf } from "../store/actions/action";
import { connect } from 'react-redux'


function App(props) {
  useEffect(() => {
    props.fetchSmurf()
  }, [])

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <SmurfList />
    </div>
  );

}

export default connect(null, { fetchSmurf })(App)

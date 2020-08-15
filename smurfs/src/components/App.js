import React, { useEffect } from "react";
import "./App.css";
import { SmurfList } from './SmurfList'
import { fetchSmurf } from "../store/actions/action";
import { connect } from 'react-redux'


function App(props) {
  console.log('APP PROPS', props)
  useEffect(() => {
    props.fetchSmurf()
  }, [])

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <SmurfList smurf={props.smurf}/>
    </div>
  );

}
const mapStateToProps = (state) => {
  return {
    smurf: state.smurf
  }
}
export default connect(mapStateToProps, { fetchSmurf })(App)

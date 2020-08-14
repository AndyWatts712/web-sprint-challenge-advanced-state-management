import React, { useEffect } from "react";
import { connect } from "react-redux"
import { SmurfList } from './SmurfList'
import  SmurfForm  from './SmurfForm'
import { fetchSmurf } from '../store/actions/actions'

import "./App.css";


export function App(props) {
  useEffect(()=> {
      props.fetchSmurf()
    }, [])
    
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>
          <SmurfForm />
          <SmurfList smurfs={props.smurfs}/>
        </div>
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { fetchSmurf })(App);

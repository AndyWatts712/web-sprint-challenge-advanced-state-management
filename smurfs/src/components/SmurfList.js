import React from 'react'
import { connect } from "react-redux"
import { fetchSmurf } from '../store/actions/actions'
import { Smurf } from './Smurf'


export function SmurfList(props) {
    console.log('PROPS', props)

    return (
        //map over something here.
        <div>
            SmurfList
            {props.smurfs.map((smurf) => {
               return <Smurf key={smurf.id} smurfs={props.smurfs}/>
            })}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      smurfs: state.smurfs
    };
  };
  
  export default connect(mapStateToProps, { fetchSmurf })(SmurfList);
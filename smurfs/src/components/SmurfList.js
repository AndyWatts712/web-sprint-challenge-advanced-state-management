import React from 'react'
import { connect } from "react-redux"
import { fetchSmurf } from '../store/actions/actions'
import { Smurf } from './Smurf'


export function SmurfList(props) {

    return (
        //map over something here.
        <div>
            SmurfList
            {props.smurfs.map((smurf) => {
                console.log('MAP', smurf)
               return <Smurf key={smurf.id} smurf={smurf}/>
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
import React from 'react'
import { connect } from 'react-redux'
import { Smurf } from './Smurf'


export function SmurfList(props) {

    return(
        <div>
            <h2>Smurf Village</h2>
            {props.smurf.map((item) => {
                <Smurf />
            })}
            
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
    smurf: state.smurf
    }
}
export default connect(mapStateToProps, {})(SmurfList)
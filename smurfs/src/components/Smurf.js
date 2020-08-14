import React from 'react'
import { connect } from 'react-redux'

export function Smurf(props) {
console.log('SMURF', props)
    return (
        <div>
            Smurf
            <p>Name: {props.smurf.name}</p>
            <p>age: {props.smurf.age}</p>
            <p>height: {props.smurf.height}</p>
            <p>id: {props.smurf.id}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, {})(Smurf)
import React from 'react'
import { connect } from 'react-redux'

export function Smurf(props) {
console.log('SMURF', props)
    return (
        <div>
            Smurf
            <p>Name: {props.smurfs.name}</p>
            <p>age: {props.smurfs.age}</p>
            <p>height: {props.smurfs.height}</p>
            <p>id: {props.smurfs.id}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}
export default connect(mapStateToProps, {})(Smurf)
import React from 'react'
import { connect } from 'react-redux'

export function Smurf(props) {

    return (
        <div>
            Smurf
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>height: {props.height}</p>
            <p>id: {props.id}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age,
        height: state.height,
        id: state.id
    }
}
export default connect(mapStateToProps, {})(Smurf)
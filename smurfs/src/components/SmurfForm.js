import React, { useState } from 'react'
import { connect } from "react-redux"
import { postSmurf } from '../store/actions/actions'

export function SmurfForm(props) {
    console.log('Form PROPS', props)
    const [form, setForm] = useState({
        name: '',
        age: 0,
        height: ''
    })


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log(typeof(postSmurf))
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Im submitting')
        props.postSmurf(form)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name
                        <input type="text" name="name" value={form.name} onChange={handleChange} /></label>
                </div>
                <div>
                    <label>Age
                        <input type="text" name="age" value={form.age} onChange={handleChange} /></label>
                </div>
                <div>
                    <label>Height
                        <input type="text" name="height" value={form.height} onChange={handleChange} /></label>
                </div>

                <div>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//       smurfs: state.smurfs
//     };
//   };

export default connect(null, { postSmurf })(SmurfForm);
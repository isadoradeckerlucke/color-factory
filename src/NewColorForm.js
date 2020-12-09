import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function NewColorForm({addColor}) {

    const [form, updateForm] = useState({name: '', hex: '#ffffff'})
    
    // history object that we can use for navigation 
    const history = useHistory();

    // e.persist() keeps the values from the earlier events. without it react will make the first event values null when the second event is fired.
    function handleChange(e) {
        e.persist();
        updateForm(f => ({ ...f, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        addColor({ [form.name]: form.hex})
        history.push('/colors')
    }

    // destructure form data to get value of hex and name of color
    const {hex, name} = form;

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = 'name'>color name</label>
                <input name = 'name' id = 'name' placeholder = 'enter color name' onChange = {handleChange} value = {name}/>

                <label htmlFor = 'hex'>color value</label>
                <input type = 'color' name = 'hex' id = 'hex' onChange = {handleChange} value = {hex}/>

            <input type = 'Submit' value = 'add this color' readOnly/>
            </form>

        </div>
    )
}

export default NewColorForm;
import React from 'react'

function InputForm(props) {
    return (
        <div>
            <h1>ToDo App</h1>
            <input 
                type='text' 
                value={props.task}
                onChange={props.handleChange} 
                placeholder='Write tasks' 
                ref={props.textInput}
            />
            <hr/>
        </div>
    )
}

export default InputForm

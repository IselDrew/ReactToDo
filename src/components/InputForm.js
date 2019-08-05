import React from 'react'

function InputForm(props) {
    return (
        <div>
            <h1>ToDo App</h1>
            <input 
                type='text' 
                value={props.task}
                onChange={props.writeTask} 
                placeholder='Write tasks' 
                ref={props.inputRef}
            />
            <hr/>
        </div>
    )
}

export default InputForm

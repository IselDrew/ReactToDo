import React from 'react'
import RemoveIcon from './RemoveIcon'

function TodoList(props) {
    return (
        <div className='todo-item'>
            <input 
                type='checkbox'
            />
            <a>{props.item}</a>
            <div 
                className='remove-button' 
                onClick={props.removeTask.bind(props, props.item)}
            >
                <RemoveIcon />
            </div>
        </div> 
    )
}

export default TodoList
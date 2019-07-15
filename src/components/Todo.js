import React from 'react'
import RemoveIcon from './RemoveIcon'

function TodoList(props) {
    return (
        <div className='todo-item'>
            <input 
                type='checkbox'
                checked={props.item.completed}
            />
            <a>{props.item.text}</a>
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
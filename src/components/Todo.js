import React from 'react'
import RemoveIcon from './RemoveIcon'

function TodoList(props) {
    const lineThrough = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    return (
        <div className='todo-item'>
            <input 
                type='checkbox'
                onChange={props.strikeThrough.bind(props, props.item.id)}
                checked={props.item.completed}
            />
            <a style={props.item.completed ? lineThrough : null}>{props.item.text}</a>
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
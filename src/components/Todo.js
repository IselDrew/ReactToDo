import React from 'react'
import RemoveIcon from './RemoveIcon'
import EditIcon from './EditIcon'
import SaveIcon from './SaveIcon'

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

            <div contentEditable={props.item.isEdit}>
                <a style={props.item.completed ? lineThrough : null}>{props.item.text}</a>
            </div>

            <div onClick={props.editTask.bind(props, props.item.id)}>
                {props.item.isEdit ? <SaveIcon /> : <EditIcon />}
            </div>

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

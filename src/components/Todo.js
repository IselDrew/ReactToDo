import React from 'react'
import RemoveIcon from './RemoveIcon'
import EditIcon from './EditIcon'
import SaveIcon from './SaveIcon'

function TodoList(props) {
    return (
        <div className='todo-item'>
            <input 
                type='checkbox'
                onChange={() => {props.strikeThrough(props.item.id)}}
                checked={props.item.completed}
            />

            <div 
                contentEditable={props.item.isEdit} 
                onBlur={(event) => {props.saveChanges(props.item.id, event)}}
            >
                <p className={props.item.completed ? 'line-through' : ''}>{props.item.text}</p>
            </div>

            <div onClick={() => {props.editTask(props.item.id)}}>
                {props.item.isEdit ? <SaveIcon /> : <EditIcon />}
            </div>

            <div onClick={() => props.removeTask(props.item)}>
                <RemoveIcon />
            </div>
        </div> 
    )
}

export default TodoList

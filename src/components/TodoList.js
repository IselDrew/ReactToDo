import React from 'react'

function TodoList(props) {
    return (
        <div className='todo-item'>
            <li>{props.item}</li>
            <div onClick={props.removeTask.bind(props, props.item)}>
                <svg width='15' height='15'>
                    <rect width='15' height='15' fill='red'/>
                </svg>
            </div>
        </div> 
    )
}

export default TodoList
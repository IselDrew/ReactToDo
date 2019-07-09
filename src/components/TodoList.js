import React from 'react'

function TodoList(props) {
    return (
        <div>
            <li>{props.item}</li>
            {/* <button onClick={props.removeTask.bind(props, item)}>delete</button> */}
        </div>
    )
}

export default TodoList
import React from 'react'

function TodoList(props) {
    return (
        <div className='todo-item'>
            <input 
                type='checkbox'
            />
            <a>{props.item}</a>
            <div className='remove-button' onClick={props.removeTask.bind(props, props.item)}>
                <svg viewBox='0 0 375 375' width='15' height='15' xmlns='http://www.w3.org/2000/svg'>
                    <g>
                        <polygon 
                            id='svg_1'  
                            fill='#FF3501' 
                            points='378.303,28.285 350.018,0 189.151,160.867 28.285,0 0,28.285 160.867,189.151 0,350.018   28.285,378.302 189.151,217.436 350.018,378.302 378.303,350.018 217.436,189.151 '
                        />
                    </g>
                </svg>
            </div>
        </div> 
    )
}

export default TodoList
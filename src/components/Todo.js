import React, {Component} from 'react'
import RemoveIcon from './RemoveIcon'
import EditIcon from './EditIcon'
import SaveIcon from './SaveIcon'

class Todo extends Component {
    render() {
        return (
            <div className='todo-item'>
                <input 
                    type='checkbox'
                    onChange={() => {this.props.strikeThrough(this.props.item.id)}}
                    checked={this.props.item.completed}
                />

                <div 
                    contentEditable={this.props.item.isEdit} 
                    onBlur={(event) => {this.props.saveChanges(this.props.item.id, event)}}
                >
                    <p className={this.props.item.completed ? 'line-through' : ''}>{this.props.item.text}</p>
                </div>

                <div onClick={() => {this.props.editTask(this.props.item.id)}}>
                    {this.props.item.isEdit ? <SaveIcon /> : <EditIcon />}
                </div>

                <div onClick={() => this.props.removeTask(this.props.item)}>
                    <RemoveIcon />
                </div>
            </div> 
        )
    }
}

// function TodoList(props) {
//     return (
//         <div className='todo-item'>
//             <input 
//                 type='checkbox'
//                 onChange={() => {props.strikeThrough(props.item.id)}}
//                 checked={props.item.completed}
//             />

//             <div 
//                 contentEditable={props.item.isEdit} 
//                 onBlur={(event) => {props.saveChanges(props.item.id, event)}}
//             >
//                 <p className={props.item.completed ? 'line-through' : ''}>{props.item.text}</p>
//             </div>

//             <div onClick={() => {props.editTask(props.item.id)}}>
//                 {props.item.isEdit ? <SaveIcon /> : <EditIcon />}
//             </div>

//             <div onClick={() => props.removeTask(props.item)}>
//                 <RemoveIcon />
//             </div>
//         </div> 
//     )
// }

export default Todo

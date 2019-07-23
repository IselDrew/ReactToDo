import React, {Component} from 'react'
import RemoveIcon from './RemoveIcon'
import EditIcon from './EditIcon'
import SaveIcon from './SaveIcon'

class Todo extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className='todo-item'>
                <input 
                    type='checkbox'
                    onChange={() => {this.props.strikeThrough(this.props.item.id)}}
                    checked={this.props.item.completed}
                />

                {this.props.item.isEdit ? 
                    <input 
                        type='text' 
                        defaultValue={this.props.item.text}
                        onBlur={(event) => {this.props.saveChanges(this.props.item.id, event)}}
                    /> :
                    <div> 
                        <p className={this.props.item.completed ? 'line-through' : ''}> 
                            {this.props.item.text} 
                        </p> 
                    </div> 
                }

                {/* <div 
                    contentEditable={this.props.item.isEdit} 
                    onBlur={(event) => {this.props.saveChanges(this.props.item.id, event)}}
                >
                    <p className={this.props.item.completed ? 'line-through' : ''}>
                        {this.props.item.text}
                    </p>
                </div> */}

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

export default Todo

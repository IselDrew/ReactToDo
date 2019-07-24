import React, {Component} from 'react'
import RemoveIcon from '../icons/RemoveIcon'
import EditIcon from '../icons/EditIcon'
import SaveIcon from '../icons/SaveIcon'

class Todo extends Component {
    render() {
        return (
            <div className='todo-item'>
                <input 
                    type='checkbox'
                    onChange={() => {this.props.strikeThrough(this.props.item.id)}}
                    checked={this.props.item.completed}
                />

                {this.props.item.isEdit ? 
                    (<input 
                        type='text' 
                        defaultValue={this.props.item.text}
                        onChange={(event) => {this.props.updateTask(event)}}
                        autoFocus
                        placeholder={this.props.item.text}
                    />) :
                    (<div> 
                        <p className={this.props.item.completed ? 'line-through' : ''}> 
                            {this.props.item.text} 
                        </p> 
                    </div>)
                }

                <div onClick={
                    this.props.item.isEdit ? 
                        (() => {this.props.saveTask(this.props.item.id)}):
                        (() => {this.props.editTask(this.props.item.id)})
                    }
                >
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

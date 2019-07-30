import React, {Component, Fragment} from 'react'
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
                    (
                    <Fragment>
                        <input
                        type='text'
                        defaultValue={this.props.item.text}
                        onChange={(event) => {this.props.updateTask(event)}}
                        autoFocus
                        placeholder={this.props.item.text}
                        />
                        <div onClick={() => {this.props.saveTask(this.props.item.id)}}>
                            <SaveIcon />
                        </div>
                    </Fragment>
                    ) : (
                    <Fragment>
                    <div> 
                        <p className={this.props.item.completed ? 'line-through' : ''}> 
                            {this.props.item.text} 
                        </p> 
                    </div>
                    <div onClick={() => {this.props.editTask(this.props.item.id)}}>
                            <EditIcon />
                    </div>
                    </Fragment>
                    )
                }

                <div onClick={() => this.props.removeTask(this.props.item)}>
                    <RemoveIcon />
                </div>
            </div> 
        )
    }
}

export default Todo

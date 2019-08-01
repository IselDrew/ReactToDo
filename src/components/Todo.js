import React, {Component, Fragment} from 'react'
import RemoveIcon from '../icons/RemoveIcon'
import EditIcon from '../icons/EditIcon'
import SaveIcon from '../icons/SaveIcon'

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEdit: false,
            editedText: ''
        }

        this.editTask = this.editTask.bind(this)
        this.getEditedTask = this.getEditedTask.bind(this)
    }

    editTask() {
        this.setState({
            isEdit: true, 
            editedText: this.props.item.text
        })
    }

    getEditedTask(event) {
        if(!this.state.editedText) {
            return;
        }
        this.setState({ editedText: event.target.value })
    }

    render() {
        return (
            <div className='todo-item'>
                <input 
                    type='checkbox'
                    onChange={() => {this.props.strikeThrough(this.props.item.id)}}
                    checked={this.props.item.completed}
                />

                {this.state.isEdit ? 
                    (
                    <Fragment>
                        <input
                            type='text'
                            defaultValue={this.props.item.text}
                            onChange={(event) => {this.getEditedTask(event)}}
                            autoFocus
                            placeholder={this.props.item.text}
                        />
                        <div onClick={
                            () => {this.props.saveTask(this.props.item.id, this.state.editedText);
                            this.setState({ isEdit: false });
                            }}
                        >
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
                    <div onClick={this.editTask}>
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

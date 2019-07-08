import React, {Component} from 'react'
import TodoList from './TodoList'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            taskList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    handleChange(event) {
        this.setState( { task: event.target.value })
    }

    addTask(event) {
        event.preventDefault();
        if(!this.state.task) {
            return
        } else {
            this.setState(prevState => {
                return {
                    task: '',
                    taskList: [...prevState.taskList, this.state.task]
                }
            })
            console.log(this.state.taskList)
        }
    }

    render () {
        const renderText = this.state.taskList.map(item => <TodoList item={item}/>)
        return (
            <div>
                <h1>ToDo App</h1>
                <form onSubmit={this.addTask} >
                    <input 
                        type='text' 
                        value={this.state.task}
                        onChange={this.handleChange} 
                        placeholder='Write tasks' 
                    />
                    <button>Submit</button>
                </form>
                <div>
                    {renderText}
                </div>
            </div>
        );
    }
}

export default TodoForm 

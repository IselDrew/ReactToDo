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

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            const key = event.keyCode
            if (key !== 13) {
                return
            } else {
                // console.log(event)
                this.addTask(event)
            }
        })
    }

    handleChange(event) {
        this.setState( { task: event.target.value })
    }

    addTask(event) {
        // console.log(event)
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
                    <input 
                        type='text' 
                        value={this.state.task}
                        onChange={this.handleChange} 
                        placeholder='Write tasks' 
                    />
                <div>
                    {renderText}
                </div>
            </div>
        );
    }
}

export default TodoForm 

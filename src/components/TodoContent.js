import React, {Component} from 'react'
import TodoList from './TodoList'

class TodoContent extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            taskList: []
        };
        this.textInput = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount() {
        this.textInput.current.addEventListener('keydown', (event) => {
            const key = event.keyCode;
            if (key !== 13) {
                return;
            } else {
                // console.log(event)
                this.addTask(event);
            }
        });
    }

    handleChange(event) {
        this.setState( { task: event.target.value });
    }

    removeTask(taskToRemove) {
        console.log(taskToRemove, 'removed');
        this.setState({
            taskList: this.state.taskList.filter(item => item !== taskToRemove)
        });
    }

    addTask(event) {
        // console.log(event)
        event.preventDefault();
        if(!this.state.task) {
            return;
        } else {
            this.setState(prevState => {
                return {
                    task: '',
                    taskList: [...prevState.taskList, this.state.task]
                };
            });
            console.log(this.state.taskList);
        }
    }

    render () {
        const showListElem = this.state.taskList.map(item => <TodoList item={item} removeTask={this.removeTask}/>);
        return (
            <div className='todo-list'>
                <h1>ToDo App</h1>
                <input 
                    type='text' 
                    value={this.state.task}
                    onChange={this.handleChange} 
                    placeholder='Write tasks' 
                    ref={this.textInput}
                />
                <hr/>
                {showListElem}
            </div>
        );
    }
}

export default TodoContent 

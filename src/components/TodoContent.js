import React, {Component} from 'react'
import Todo from './Todo'
import InputForm from './InputForm'

class TodoContent extends Component {
    constructor() {
        super();

        this.keyCount = 0;
        this.state = {
            task: '',
            taskList: []
        };
        this.textInput = React.createRef();

        this.getKey = this.getKey.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    componentDidMount() {
        this.textInput.current.addEventListener('keydown', (event) => {
            const key = event.keyCode;
            if (key !== 13) {
                return;
            }
            this.addTask(event);
        });
    }

    getKey() {
        return this.keyCount++;
    }

    handleChange(event) {
        this.setState({task: event.target.value});
    }

    removeTask(taskToRemove) {
        this.setState({
            taskList: this.state.taskList.filter(item => item !== taskToRemove)
        });
        console.log(taskToRemove, 'removed');
    }

    addTask(event) {
        event.preventDefault();
        const newTask = {
            'id': this.getKey(),
            'text': this.state.task,
            'completed': false
        }
        if(!this.state.task) {
            return;
        } 
        this.setState(prevState => {
            return {
                task: '',
                taskList: [...prevState.taskList, newTask]
            }
        })
        console.log(this.state.taskList)
    }

    render () {
        const listItems = this.state.taskList.map(item => (
            <Todo 
                key={item.id}
                item={item} 
                removeTask={this.removeTask} 
            />
        ));
        return (
            <div className='todo-list'>
                <InputForm 
                    {...this.state}
                    handleChange={this.handleChange}
                    textInput={this.textInput}
                />
                {listItems}
            </div>
        );
    }
}

export default TodoContent 

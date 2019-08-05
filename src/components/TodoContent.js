import React, {Component} from 'react'
import Todo from './Todo'
import InputForm from './InputForm'

class TodoContent extends Component {
    constructor() {
        super();

        this.state = {
            task: '',
            taskList: []
        };
        this.keyCount = 0;
        this.inputRef = React.createRef();

        this.getKey = this.getKey.bind(this)
        this.writeTask = this.writeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.strikeThrough = this.strikeThrough.bind(this)
    }

    componentDidMount() {
        this.inputRef.current.addEventListener('keydown', (event) => {
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

    writeTask(event) {
        if(event.target.value === ' ') {
            return;
        }
        this.setState({ task: event.target.value });
    }

    addTask(event) {
        event.preventDefault();
        const newTask = {
            id: this.getKey(),
            text: this.state.task,
            completed: false
        }
        if(!this.state.task) {
            return;
        } 
        this.setState(prevState => {
            return {
                task: '',
                taskList: [...prevState.taskList, newTask]
            };
        });
        // console.log(this.state.taskList);
    }

    saveTask(id, editedText) {
        if(!editedText.trim()) { 
            return;
        } 
        this.setState(state => {
            return {
                taskList: state.taskList.map(todo => {
                    if(todo.id === id) {
                        return {
                            ...todo, 
                            text: editedText
                        }
                    } else {
                        return todo
                    }
                })
            }        
        })
    }

    removeTask(task) {
        this.setState({
            taskList: this.state.taskList.filter(item => item !== task)
        });
    }

    strikeThrough(id) {
        this.setState(state => {
            return {
                taskList: state.taskList.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        } 
                    } else {
                        return todo
                    }
                })
            }
        })
    }

    render () {
        const listItems = this.state.taskList.map(item => (
            <Todo 
                key={item.id}
                item={item} 
                removeTask={this.removeTask} 
                strikeThrough={this.strikeThrough}
                saveTask={this.saveTask} 
            />
        ));

        return (
            <div className='todo-list'>
                <InputForm 
                    task={this.state.task}
                    writeTask={this.writeTask}
                    inputRef={this.inputRef}
                />
                {listItems}
            </div>
        );
    }
}

export default TodoContent 

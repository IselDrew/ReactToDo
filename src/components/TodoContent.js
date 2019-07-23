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
        this.textInput = React.createRef();
        this.editedText = '';

        this.getKey = this.getKey.bind(this)
        this.writeTask = this.writeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.strikeThrough = this.strikeThrough.bind(this)
        this.updateTask = this.updateTask.bind(this)
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

    writeTask(event) {
        if(event.target.value === ' ') {
            return;
        }
        this.setState({task: event.target.value});
    }

    addTask(event) {
        event.preventDefault();
        const newTask = {
            'id': this.getKey(),
            'text': this.state.task,
            'completed': false,
            'isEdit': false
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
        console.log(this.state.taskList);
    }

    editTask(id) {
        // console.log('Editing task with id', id)
        this.setState(argum => {
            return argum.taskList.map(todo => {
                if (todo.id === id) {
                    todo.isEdit = true;
                }
                return todo;
            })
        })
    }

    updateTask(event) {
        this.editedText = event.target.value;
    }

    saveTask(id) {
        // console.log('Text', this.editedText, 'saved by id', id)
        this.setState(argum => {
            return argum.taskList.map(todo => {
                if (todo.id === id) {
                    todo.text = this.editedText;
                    todo.isEdit = false;
                }
                return todo;
            })
        })
    }

    removeTask(task) {
        this.setState({
            taskList: this.state.taskList.filter(item => item !== task)
        });
    }

    strikeThrough(id) {
        this.setState(argum => {
            const updatedCheckbox = argum.taskList.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            return updatedCheckbox;
        })
    }

    render () {
        const listItems = this.state.taskList.map(item => (
            <Todo 
                key={item.id}
                item={item} 
                removeTask={this.removeTask} 
                editTask={this.editTask}
                strikeThrough={this.strikeThrough}
                saveTask={this.saveTask} updateTask={this.updateTask}
            />
        ));

        return (
            <div className='todo-list'>
                <InputForm 
                    {...this.state}
                    writeTask={this.writeTask}
                    textInput={this.textInput}
                />
                {listItems}
            </div>
        );
    }
}

export default TodoContent 

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
        this.writeTask = this.writeTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.strikeThrough = this.strikeThrough.bind(this)
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
        this.setState({task: event.target.value});
    }

    removeTask(task) {
        this.setState({
            taskList: this.state.taskList.filter(item => item !== task)
        });
        // console.log(task, 'removed');
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

    editTask(id) {
        this.setState(argum => {
            const updatedEdit = argum.taskList.map(todo => {
                if (todo.id === id) {
                    todo.isEdit = !todo.isEdit;
                }
                return todo;
            })
            return updatedEdit;
        })
    }

    saveChanges(id, event) {
        let newText = event.target.textContent;
        this.setState(argum => {
            const updatedEdit = argum.taskList.map(todo => {
                if (todo.id === id) {
                    todo.text = newText;
                }
                console.log(todo);
                return todo;
            })
            return updatedEdit;
        })
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
                editTask={this.editTask}
                strikeThrough={this.strikeThrough}
                saveChanges={this.saveChanges}
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

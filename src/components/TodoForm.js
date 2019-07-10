import React, {Component} from 'react'
// import TodoList from './TodoList'

class TodoForm extends Component {
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
        })
    }

    handleChange(event) {
        this.setState( { task: event.target.value });
    }

    removeTask(taskToRemove) {
        console.log('removed, ', taskToRemove)
        this.setState({
            taskList: this.state.taskList.filter(item => item !== taskToRemove)
        })
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
            })
            console.log(this.state.taskList);
        }
    }

    render () {
        // const renderText = this.state.taskList.map(item => <TodoList item={item}/>);
    const renderText = this.state.taskList.map(item =>  
    <div className='todo-item'>
        <li>{item}</li>
        <div onClick={this.removeTask.bind(this, item)}>
            <svg width='15' height='15'>
                <rect width='15' height='15' fill='red'/>
            </svg>
        </div>
    </div> )
        return (
            <div>
                <h1>ToDo App</h1>
                    <input 
                        type='text' 
                        value={this.state.task}
                        onChange={this.handleChange} 
                        placeholder='Write tasks' 
                        ref={this.textInput}
                    />
                    <hr/>
                <div>
                    {renderText}
                </div>
            </div>
        );
    }
}

export default TodoForm 

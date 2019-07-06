import React, {Component} from 'react'

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            taskList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState( { task: event.target.value })
    }

    handleClick(event) {
        this.setState(prevState => {
            return {
                taskList: [...prevState.taskList, this.state.task]
            }
        })

        console.log(this.state.taskList)

        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>ToDo App</h1>
                <form 
                    onSubmit={this.handleClick}
                    disabled={this.state.task}
                >
                    <input 
                        type='text' 
                        value={this.state.task}
                        onChange={this.handleChange} 
                        placeholder='Write tasks' 
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TodoForm 

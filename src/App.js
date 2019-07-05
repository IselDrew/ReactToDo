import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super();
        this.state = {
            taskList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }

    handleChange(event) {
        console.log('input event');
    }

    handleClick(event) {
        console.log('click event');
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>ToDo App</h1>
                <form onSubmit={this.handleClick}>
                    <input 
                        type='text' 
                        placeholder='Write tasks' 
                        onChange={this.handleChange} 
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default App
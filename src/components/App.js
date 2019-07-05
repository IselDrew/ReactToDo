import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick= this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleClick(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h1>ToDo App</h1>
                <form>
                    <input type='text' placeholder='Write tasks' value={this.state.value} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Submit</button>
                    <h1>{this.state.value}</h1>
                </form>
            </div>
        );
    }
}

export default App
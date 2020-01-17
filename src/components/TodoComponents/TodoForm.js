import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super ();
        this.state = {
            newItem: ''
        }
    };

    handleChange = event => {
        this.setState ({ ...this.state, newItem: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewToDo(this.state.newItem);
        this.setState({ ...this.state, newItem: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type='text'
                    name='item'
                    placeholder='...todo'
                    value={this.state.newItem}
                />
                <button>Add ToDo</button>
                <button onClick={this.props.clearItem}>Clear Completed</button>
            </form>
        )
    }
}
export default TodoForm;

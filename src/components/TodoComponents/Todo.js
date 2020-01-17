import React from 'react';
import '../TodoComponents/Todo.css';

const Todo = props => {

    return (
        <div
            onClick={event => props.toggleItem(props.item.id)}
            className={`item${props.item.completed ? ' completed' : ''}`}
        >
            <p>{props.item.task}</p>
        </div>
    )
}
export default Todo;

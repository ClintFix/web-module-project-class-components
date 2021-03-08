// This component takes in the todo data (mapped in todolist) and displays the task
import React from 'react';
import "./Todo.css"

const ToDo = (props) => {
    return (
        <div onClick={() => props.toggleItem(props.item.id)} className={`item${props.item.completed ? " purchased" : ""}`}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default ToDo;
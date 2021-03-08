// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

//functional component (no state lives or is changed here)
const ToDoList = (props) => {
    return (
        <>
        {
            props.toDos.map(item => (
                <ToDo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))
        }
        </>
    )
}

export default ToDoList;
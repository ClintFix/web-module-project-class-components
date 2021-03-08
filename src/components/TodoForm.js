import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            itemText: "",
        }
    }

    //update state as user types into form
    handleChanges = (e) => {
        this.setState({
            itemText: e.target.value,
        })
    }

    //Add form values to new todo list item using parent component's addItem function
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.itemText)

        //reset form:
        this.setState({
            itemText: "",
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='itemText'
                    value={this.state.itemText}
                    onChange={this.handleChanges}
                />
                <button>Add To-Do</button>
                <button onClick={this.props.removeItems}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;
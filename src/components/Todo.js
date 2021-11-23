import React, { Component } from "react";
import List from "./List";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItem: "",
      items: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className=" mt-20 w-1/2">
          <form action="" onSubmit={this.handleSubmit}>
            <input
              className="border-solid border-2 border-gray-200 p-1 rounded-md"
              type="text"
              value={this.state.todoItem}
              onChange={this.handleChange}
              required
            />
            <button className="rounded-md bg-green-700 py-1 px-8 ml-4 hover:opacity-50 text-white text-bold">
              Add
            </button>
          </form>

          <List items={this.state.items} />
        </div>
      </>
    );
  }
}

export default Todo;

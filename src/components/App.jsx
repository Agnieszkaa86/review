import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      newTask: "",
    };
  }
  handleInputChange = (event) => {
    // console.log("value: ", event.target.value)
    this.setState({ newTask: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, { task: this.state.newTask, done: false }],
      newTask: "",
    })
  }
  // componentDidUpdate(prevProps,prevState) {
  //   console.log("Component upadted:, State: ", this.state)
  // }

  render(){
    return (
      <div>
        <h1>Todo List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Add todo: 
            <input type="text" onChange={this.handleInputChange} value={this.state.newTask} />
          </label>
          <button>Add</button>
        </form>
      </div>
    )
  }
}
export default App;

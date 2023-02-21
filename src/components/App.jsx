import { Component } from "react";
// import styled from 'styled-components';

// const Li = styled.li`
// text-decoration : line-throught;
// `

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
    console.log("SUBMITED");
    if (this.state.newTask === "") {
      alert("wpisz todo");
      return;
    }
    this.setState({
      todos: [...this.state.todos, { task: this.state.newTask, done: false }],
      newTask: "",
    })
    
  }
  handleDone = (index) => {
    const todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }
  componentDidMount() {
    // console.log("Component upadted:, State: ", this.state)
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({todos})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  }

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
        <ul>
          {this.state.todos.map((todo, index)=>(
            <li key={index}> 
              <input type="checkbox" checked={todo.done} onChange={()=>this.handleDone(index)}></input>
              {todo.task}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default App;

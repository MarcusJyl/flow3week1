import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import { v1 as uuid } from "uuid";

function App() {
  const initialData = [
    { id: uuid(), todoText: "preben mortens" },
    { id: uuid(), todoText: "idiot" },
    { id: uuid(), todoText: "fuck" }
  ]
  const [todos, setTodos] = useState(initialData);
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });
  console.log(todos)


  const addTodo = todo => {
    if (todo.id === "") { // id=-1 Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {//if id != "", it's an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({id:"", todoText:""})
  };
  
  const editTodo = (person) => {
    setNewTodo(person)
  }
  const deleteTodo = (id) => {
    todos.splice(id,1)
    setTodos([...todos])
    
  }

  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
        
      </h2>
  <p>Counter {todos.length}</p>
      <div className="row">
        <div className="col-6 allTodos">
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
        <div className="col-5 new-todo">
          <NewTodo
            addTodo={addTodo}
            nextTodo={newTodo}            
          />
        </div>
      </div>
    </div>
  );
}
export default App;

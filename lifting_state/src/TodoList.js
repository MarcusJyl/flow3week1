import React from 'react';
import PropTypes from 'prop-types';


function TodoList(props){
  const{todos, deleteTodo, editTodo} = props
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <table>
         <thead><tr><th>id</th><th>name</th></tr></thead>
    <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
          <td>{todo.todoText}</td>
          <td>
            <a href="#" onClick={(e) =>{e.preventDefault();deleteTodo(todo)}}>delete</a>
            /
            <a href="#" onClick={(e) =>{e.preventDefault();editTodo(todo)}}>edit</a>
          </td>
          </tr>

        ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
}

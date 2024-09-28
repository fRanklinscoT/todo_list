import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todo,setTodo] = useState([]);
    const [headingInput,setHeadingInput] = useState('');
    const [listInput,setListInput] = useState({});

    const handleAddTodo = () => {
        if(headningInput.trim !== ''){
            setTodos([...todos,{heading: headingInput,lists:[]}]);
            setHeadingInput('');
        }
    }

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
            {todos.map((todo,index) => (
                <div key={index} className='todo-card'>
                    <div className="heading_todo">
                        <h3>{todo.heading}</h3>
                        <button className="delete-button-heading">Delete Heading </button>
                    </div>
                </div>
            ))}
      </div>
    </>
  );
};

export default TodoList;

import React, { useState, useEffect } from "react";
import './App.css';


//IMPORTING COMPONENTS
import Form from "./components/form.js";
import TodoList from "./components/todoList.js";


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
      filterHandler();
      saveLocalTodos();
    }, [todos, status]);

  const filterHandler =() => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  };


  //Save todos to local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
          <header>
          <h1>Todo List</h1>
        </header>
        <Form 
          todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText} 
          status={status} 
          setStatus={setStatus}
           />
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

import React from 'react';
import Todo from "./Todo.js";



const TodoList = ({todos, setTodos, filteredTodos}) => {

    

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {   
                    filteredTodos.map(todo => (
                        <Todo 
                            text={todo.text} 
                            setTodos={setTodos} 
                            key={todo.id} 
                            todos={todos} 
                            todo={todo}
                             />
                    ))
                }
            </ul>
        </div>
    );
    
};


export default TodoList;
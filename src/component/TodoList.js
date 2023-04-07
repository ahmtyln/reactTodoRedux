import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggle,destroy } from '../redux/todos/todosSlice';

let filtered = [];
const TodoList = () => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.todos.items)
    const activeFilter = useSelector(state => state.todos.activeFilter)

    filtered = items;

    if(activeFilter!=="all"){
        filtered = items.filter((todo) => 
                activeFilter==="active" ? todo.completed === false
                : todo.completed === true)
    }

  return (
    <ul className="todo-list">
        
        {
            filtered.map((item) => {
                return(
                    <li key={item.id} className={item.completed ? "completed" : ""}>
                        <div className="view">
                            <input type="checkbox" checked={item.completed} className="toggle" onChange={() => dispatch(toggle(item.id))}/>
                            <label >{item.title}</label>
                            <button className="destroy" onClick={() => dispatch(destroy(item.id))}></button>
                        </div>
                    </li>
                )
            })
        }
  </ul>
  )
}

export default TodoList

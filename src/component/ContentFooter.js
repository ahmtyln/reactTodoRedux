import React from 'react'

import { useSelector,useDispatch } from 'react-redux'
import {changeActiveFilter,clearCompleted} from "../redux/todos/todosSlice";

const ContentFooter = () => {
    const items = useSelector(state => state.todos.items)
    const itemsLeft = items.filter(item => !item.completed).length
    const itemsActive = items.filter(item => item.completed === true).length
    const activeFilter = useSelector(state => state.todos.activeFilter)
    const dispatch = useDispatch();

  return (
    <footer className='footer'>
        <span className="todo-count">
            <strong>{itemsLeft} </strong>
            item{itemsLeft > 1 ? "s" : "" } left
        </span>
        <ul className="filters">
            <li>
                <a href='#' onClick={(e) => dispatch(changeActiveFilter((e.target.textContent).toLowerCase()))} className={activeFilter==="all" ? "selected" : ""}>All</a>
            </li>
            <li>
                <a href='#' onClick={(e) => dispatch(changeActiveFilter((e.target.textContent).toLowerCase()))} className={activeFilter==="active" ? "selected" : ""}>Active</a>
            </li>
            <li>
                <a href='#' onClick={(e) => dispatch(changeActiveFilter((e.target.textContent).toLowerCase()))} className={activeFilter==="completed" ? "selected" : ""}>Completed</a>
            </li>
        </ul>
        <button onClick={() => dispatch(clearCompleted())} className="clear-completed">
            {itemsActive===0 ? "" : "Clear Completed" }
        </button>
    </footer>
  )
}

export default ContentFooter

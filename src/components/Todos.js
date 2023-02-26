import React from 'react'
import Todoitem from '../components/Todoitem';

export default function Todos(props) {
  return (
    <div className="container"> 
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length===0 ? "no todos to dispaly":
      props.todos.map((todo)=>{
        return (
        <>
        <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>
        )
      })
      }
    </div>
  )
}


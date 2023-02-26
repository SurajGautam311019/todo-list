import './App.css';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import { useState } from "react";
import { useEffect } from 'react';
import React from "react";




function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    console.log("i'm on delete" ,{todo});

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }else{

      sno=todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,mytodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
   <>
   <AddTodo  addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );

}

export default App;

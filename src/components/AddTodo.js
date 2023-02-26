import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {    
    // const {addTodo} = props;
    // console.log(addTodo);
    const [title,SetTitle]=useState("");
    const [desc,SetDesc]=useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description can not be blank");
        }else{
            props.addTodo(title,desc);
            SetTitle("");
            SetDesc("");
        }
            
    }
    return (
        <div className='container my-3'>
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>SetTitle(e.target.value)}
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>SetDesc(e.target.value)}
                    className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add todo</button>
            </form>
        </div>
    )
}

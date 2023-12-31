import { useState } from "react"

function AddToDo({addToDo}){

    const [text, setText]  =  useState('');

    const handleToDo  =  ()=>{
        if(text.trim()!==''){
            addToDo(text);
            setText('');
        }

    }

    return(
        <>
        <input
        type  = 'text'
        value  = {text}
        onChange={(e)=> setText(e.target.value)}
        >
        </input>
        <button 
        onClick={handleToDo}>Add ToDo</button>
        </>
    )
}

export default AddToDo
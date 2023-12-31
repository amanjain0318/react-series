    import { useState } from "react";

function FirstComponent(){
    // by using count like direct variable state will not be updated because of that UI data will not render
    // to get UI updated useState hooks are required
    //let count  =  17;
    const [count, setCounter]=  useState(15) // initial value has to be passed 
    const addValue  =  ()=> {
        //count = count+1
        setCounter((count) => count+1)
        setCounter((count) => count+1)
        setCounter((count) => count+1)   
    }
    const dropValue  =  ()=> {
        //count = count+1
        if(count === 20)
            setCounter(1)
        else
            setCounter((count) => count-1)   
    }
    return(
        <>
            <h2>This is my First Learning Component</h2>
            <h3>Creating the states of Counter in React </h3>
            <h3>Intial Counter Value is :{count}</h3>
            <button onClick={addValue}> Add Counter</button>{" "}
            <button onClick={dropValue}>Drop Count</button>
        </>


    )
}

export default FirstComponent
// Website (url => html page)
// aou (url=> json) - get data - present data in react
// json (javascript object notation)
// API ( Application Programming Interface )

import { useEffect } from "react";

// https://jsonplaceholder.typicode.com/todos


function Api(){
    // let todos = [];

    // useEffect use for loading apis automatic
    useEffect (()=> {
LoadTodos();
    },[]);

    
    const LoadTodos = async()=>{
        console.log('Loading Todos');
       let res = await  fetch('https://jsonplaceholder.typicode.com/todos');
       let data = await res.json();
       console.log(data);
    } ;
    const handleClick =async () => {
        LoadTodos();
        console.log('The End');
    }
    return(
        <div>
       <div><h1>Api Example: </h1><h2>List of todos</h2></div>
        <button onClick={handleClick}>Load Todos</button>

        </div>
    )
};

export default Api;
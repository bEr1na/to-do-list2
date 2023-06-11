import './style.css';
import { remove, update } from './todo';
import { useState } from 'react';

export const Task=({text, id})=>{
    
    const  [item,setItem] = useState({
        _id: id,
        text: text,
        isCompleted: false
    } ); 

    const del=()=>{
        remove('api/todos2', id, data=>{
            if(!data) console.log('There was an error during remove data.')
        })
    }
    const complete =(e)=>{
       if(item.isCompleted === false) item.isCompleted = true;
       else item.isCompleted = false
       update('api/todos2', id, item, data=>{
        if(!data) console.log("There was an error during update data.");
       })
    }
    return(
        <div className='task'>
         {item.isCompleted === true && <div className='one-task' onClick={complete}>{item.text}</div>}
         {item.isCompleted === false && <div className='one-task-false' onClick={complete}>{item.text}</div>}
         <button onClick={del}>DELETE</button>
        </div>
    )
}

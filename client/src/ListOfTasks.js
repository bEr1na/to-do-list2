import { useEffect, useState } from "react";
import { list } from "./todo";
import {Task} from './Task'

export default function ListOfTasks(){

    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        list('api/todos2', data=>{
            setTasks(data)
        })
    })
    return(
        <div>
            {tasks.map((data)=><Task
            key={data._id}
             text={data.text} 
             id={data._id}/>)}
        </div>
    )
}
import './style.css';
import { insert } from './todo';
import { useState } from 'react';
import {v4 as uuid } from 'uuid'

export default function EnterTask(){

    const [item, setItem] = useState({
        _id: '0',
        text: '',
        isCompleted: false
    })

    function changeHandler(e){
        e.preventDefault();
        setItem(
            {
                ...item, 
                [e.target.name]: e.target.value
            }
        )
    }
    const add=(e)=>{
        if(item.text.length === 0){
            alert('Please enter text!')
        }
        if(item.text.length > 0){
            const unique_id = uuid();
            item._id =unique_id;
            insert('api/todos2', item, data=>{
                if(!data) console.log('There was an error during insert data.')
            }) 
        }
    }

    return(
       <div>
         <div className='enter-task'>
            <input placeholder='Enter a task here...' 
            type='text'
            name='text'
            value={item.text}
            onChange={changeHandler} />
            <button onClick={add}>ADD</button>
        </div>
        <hr/>
       </div>
    )
}
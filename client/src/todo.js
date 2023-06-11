import axios from 'axios';
const apiUrl = 'http://localhost:44300';
const headers={
    'Content-Type':'application/json',
    'Accept': 'application/json'
   
}

export const update = (path, id, data, callback) =>{
    axios.put(`${apiUrl}/${path}/${id}`,data, {headers})
    .then(response=>callback(response.data))
    .catch(reason=>{
        console.log(reason);
        callback(false);
    })
}

export const list = (path, callback) =>{
    axios.get(`${apiUrl}/${path}`, {headers})
    .then(response=>callback(response.data))
    .catch(reason=>{
        console.log(reason);
        callback(false);
    })
}

export const remove = (path, id, callback) =>{
    axios.delete(`${apiUrl}/${path}/${id}`, {headers})
    .then(response=>callback(response.data))
    .catch(reason=>{
        console.log(reason);
        callback(false);
    })
}

export const read = (path, id, callback) =>{
    axios.get(`${apiUrl}/${path}/${id}`, {headers})
    .then(response=>callback(response.data))
    .catch(reason=>{
        console.log(reason);
        callback(false);
    })
}

export const insert = (path, data, callback) =>{
    axios.post(`${apiUrl}/${path}`,data, {headers})
    .then(response => callback(response.data))
    .catch(reason=>{
        console.log(reason);
        callback(false);
    })
}
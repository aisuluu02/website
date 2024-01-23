import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../context/ProductContextProvaider'
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const Editproduct = () => {
  const{todos,updateTodos}= useContext(productContext);
  const{ id } = useParams();
  const [name,setName]= useState("");
  const [lastName,setLastName]= useState("");
  const [phone,setPhone]= useState("");
  const [img,setImg]= useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const todoEdit = todos.find(
      (todo) => todo.id === parseInt(id, 10)
    );
    if (todoEdit) {
      setName(todoEdit.todoName || "");
      setLastName(todoEdit.todoLastName || "");
      setPhone(todoEdit.todoPhone || "");
      setImg(todoEdit.todoImg || "");
    }
  }, [id, todos]);


  const handleEdit = () => {
    try {
      const updatedTodos = {
        id: parseInt(id, 10),
        todoName: name,
        todoLastName: lastName,
        todoPhone: phone,
        todoImg: img,
      };
      updateTodos(updatedTodos);
      navigate("/");
    } catch (error) {
      console.error("Error during handleEdit:", error);
    }
  };
  return (
    <div> 
      <TextField
        id="outlined-basic" 
        label="Name" 
        variant="outlined" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      /> 
      <TextField
        id="outlined-basic" 
        label="LastName" 
        variant="outlined" 
        value={lastName} 
        onChange={(e) => setLastName(e.target.value)} 
      /> 
      <TextField
        id="outlined-basic" 
        label="Phone" 
        variant="outlined" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      /> 
      <TextField 
        id="outlined-basic" 
        label="Img" 
        variant="outlined" 
        value={img} 
        onChange={(e) => setImg(e.target.value)} 
      /> 
      <Button onClick={handleEdit} variant="contained"> 
        Save
      </Button> 
    </div> 
  )
}


export default Editproduct
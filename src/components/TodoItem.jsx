import { Button } from "@mui/material";
import React from "react"; 
import { Link } from "react-router-dom";
 
const TodoItem = ({ todoName, 
    todoPhone, 
    todoImg, 
    todoLastName, 
    DeleteFunc, 
    id, }) => {
      
      const cardStyle = {
        padding: "15px",
        border: "2px solid white",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "15px",
      };
    
      const imageStyle = {
        width: "250px",
        height: "250px",
        borderRadius: "8px",
        marginBottom: "10px",
      };
    
      const textStyle = {
        color: "black",
        marginBottom: "8px",
        textAlign: "center",
      };
    
      const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "10px",
        width: "100%",
      };
    
    
      
  return ( 
    <div style={{ display: "inline-block", width: "300px", height: "200px" }}>
      <div style={cardStyle}> 
      <div>
        <img src={todoImg} alt="" style={imageStyle} /> 
        <p style={textStyle} >Имя: {todoName}</p> 
        <p style={textStyle}>Фамилия: {todoLastName}</p>
        <p style={textStyle}>Номер тел: {todoPhone}</p> 

      </div> 
      <div style={buttonContainerStyle}>
      <button onClick={() => DeleteFunc(id)} className="button"> 
        Delete 
      </button>
      <Link to={`/edit/${id}`}>
        <button className="button">
      Edit
        </button>
      </Link>
      </div>
    </div> 
    </div>
  ); 
}; 
 
export default TodoItem;
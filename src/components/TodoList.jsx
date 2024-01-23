import { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvaider";
import TodoItem from "./TodoItem";

const TodoList = () => { 
  const { getTodos, todos,DeleteFunc} = useContext(productContext); 
  useEffect(() => { 
    getTodos(); 
  }, []); 
  return ( 
    <div> 
      {todos.map((elem) => ( 
        <TodoItem 
        {...elem}
        key={elem.id}   
        DeleteFunc={()=> DeleteFunc(elem.id)} 
      />
      ))} 

    </div> 
  ); 
}; 
 
export default TodoList;
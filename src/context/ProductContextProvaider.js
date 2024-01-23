import axios from "axios";
import { createContext, useState } from "react";
import { API } from "../helpers/const";

export const productContext = createContext(); //* хранит в себе весь функционал 
const ProductContecstProvader = ({ children }) => { 
  const [todos, setTodos] = useState([]); 
  //* children это говорит о том что весь функционал будет доступен всем дочерним жлементам 
  //! create 
  const addTodo = async (todo) => { 
    await axios.post(API, todo); 
  }; 
  //! read 
  const getTodos = async () => { 
    try { 
      // try позволяет детально посмотреть ошибку в консоли 
      const { data } = await axios(API); 
      console.log(data); 
      setTodos(data); 
      return data; 
    } catch (error) { 
      // под копотом error показывает какая ошибка 
      console.log(error); 
    } 
  }; 
 
//! delete 
const DeleteFunc = async (id) => { 
    try { 
      await axios.delete(`${API}/${id}`); 
      const updatedTodos = todos.filter((elem) => elem.id !== id); 
      setTodos(updatedTodos); 
    } catch (error) { 
      console.log(error); 
    } 
  };

  
  //* values это объект в котором мы храним все функции и отправляем его, тогда все его фукции доступны дочерним элементам 
 
  //   ! Update
  const updateTodos = async (updatedTodos) => {
    try {
      await axios.put(`${API}/${updatedTodos.id}`, updatedTodos, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodos((todos) =>
      todos.map((todos) =>
          todos.id === updatedTodos.id ? updatedTodos : todos
        )
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const values = { 
    addTodo, 
    getTodos, 
    todos,
    DeleteFunc, 
    updateTodos,
  };
  return ( 
    <productContext.Provider value={values}>{children}</productContext.Provider> 
  ); 
}; 
 
export default ProductContecstProvader; 
//* как этот файл понимает кто его дочерний элемент? в APP.js мы оборачивает тот файл, который будет дочерим, в нашем случае это APP, теперь всем нашим дочерним элементам (всем файлам) доступны все написанные здесь функции.
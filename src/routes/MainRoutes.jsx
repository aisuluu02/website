import React from "react"; 
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

import TodoDetails from "../components/TodoDetails";
import Editproduct from "../components/Editproduct";
import { AddProduct } from "../components/AddProduct";

const MainRoutes = () => { 
  return ( 
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/add" element={<AddProduct />} /> 
      <Route path="/edit/:id" element={<Editproduct />} /> 
      <Route path="/details/:id" element={<TodoDetails />} /> 
    </Routes> 
  ); 
}; 
 
export default MainRoutes;
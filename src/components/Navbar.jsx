import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar"> 
      <NavLink to={"/"}><Button variant="contained" >Home</Button>
      </NavLink> 
      <NavLink to={"/add"}><Button variant="contained">Add</Button></NavLink> 
      <NavLink to={"/edit"}><Button variant="contained">Edit</Button> </NavLink> 
    </div> 
  )
}

export default Navbar
import React from 'react' 
import { NavLink } from 'react-router-dom'
import '../static/styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Welcome to the color factory.</h1>
            {/* links in order to match Routes */}
            <NavLink to="/colors">Home</NavLink>
            <NavLink to="/colors/new">Add a color</NavLink>
        </nav>
        
    )
}

export default Navbar 
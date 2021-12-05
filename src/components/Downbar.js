import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Downbar = () => {
return (
<nav className="nav-wrapper black darken-3">
<div className="container">
    <a className="brand-logo">Connect with us on finger tips</a>
    <ul className="right">
    
    <li><NavLink to="/Jobs">Insta</NavLink></li>
    <li><NavLink to="/Coursesandexams">Fb</NavLink></li>
    <li><NavLink to="/Connections"></NavLink>YouTube</li>
    <li><NavLink to="/profile">LinkedIn</NavLink></li>
    <li><NavLink to="/login">Twitter</NavLink></li>
    <li><NavLink to="/Signup">G+</NavLink></li>
    </ul>
    </div>
</nav>
)
}
export default Downbar
import React from 'react'
import {Link, NavLink} from 'react-router-dom'
const Downbar = () => {
return (
<nav className="nav-wrapper black darken-3">
<div className="container">
    <a className="brand-logo">Connect with us on finger tips</a>
    <ul className="right">
    
    <li><a href="https://www.instagram.com/freshersworld/?utm_medium=copy_link" target="_blank" rel="noreferrer">Insta</a></li>
    <li><a href="https://www.facebook.com/freshersworld"  target="_blank" rel="noreferrer">Fb</a></li>
    <li><a href="https://www.youtube.com/freshersworld" target="_blank" rel="noreferrer">YouTube</a></li>
    <li><a href="https://www.linkedin.com/company/freshersworld-com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
    <li><a href="https://twitter.com/freshersworld" target="_blank" rel="noreferrer">Twitter</a></li>
    </ul>
    </div>
</nav>
)
}
export default Downbar
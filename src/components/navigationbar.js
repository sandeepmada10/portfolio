import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


function Navigationbar(){
  return (
    <div>
    <nav className="navigationbar"> 
    <img className="logo" src="logo.png" alt="logo" />
    <Link to="/"><div className='portfolio'>Portfolio</div></Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
        </li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
</nav>
</div>
  )
}

export default Navigationbar;
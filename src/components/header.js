
import "./header.css";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Header() {
  let [userName, setuserName] = useState(" ");

  const setName = (() => {
    setuserName('Sandeep');
  })


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

      <img className="image" src="hello.jpg" alt="hello" height="400px" width="600px" />
      <h1>Welcome to my page.</h1>
      <h2>This is {userName}</h2><button onClick={setName}>  Click on it to display my name</button>
      <div className="text">
        <p>This is My First Webpage using React.</p>
        <p>I love to make the Interesting and Beautiful websites for all of you.</p>
      </div>
    </div>

  )
}

export default Header;
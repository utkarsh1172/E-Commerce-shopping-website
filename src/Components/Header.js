import React from 'react'
import "./css/header.css";

const Header = () => {
  return (
<nav className='navbar'>
  <div className='logo'>
    <h3 className='logo-h'>E-comm</h3>
  </div>
  <ul className='classlists'>
    <li>Home</li>
    <li>About</li>
    <li>Contact Us </li>
  </ul>
  <div className='search'>
    <input type="text" placeholder=' Search Your Item Here'></input>
  </div>
  <div className='cart'>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
</div>
  <div className='buttons'>
    <button className='login'>Login</button>
    <button className='login'>Sign In</button>
  </div>
</nav>

  )
}

export default Header;
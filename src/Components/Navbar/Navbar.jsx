import React, { useState } from 'react'
import './Navbar.css'
import profile_icon from '../../assets/profile_picture.png'
import LoginForm from '../Login/LoginForm'


const Navbar = () => {
  const [showLoginForm, setLoginForm] = useState(false);

  const handleOnClose = () => setLoginForm(false);
  return (
    <div>
        <nav className='navbar'>
                 <button className='btn profile'>
                  <img src={profile_icon} alt="" className='profile_icon'/>
                </button>
          <ul>
              <li><button className='btn home'>Home</button></li>
              <li><button className='btn contact'>Contact</button></li>
              <li><button className='btn about'>About</button></li>            
          </ul>
          <ul>
              <li>
                <button className='btn login' onClick={() => setLoginForm(true)}>Login</button>
              </li>
          </ul>
      </nav>
      <LoginForm onClose={handleOnClose} visible={showLoginForm} />
    </div>
  )
}

export default Navbar

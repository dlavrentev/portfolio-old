import React from 'react'
import './Header.css'
import Logo from '../../Img/dllogo.png'

export default function Header() {
  return (
    <div className='header-container'>
        {/* logo  */}
        <img className='logo-header' alt='logo' src={Logo}></img>
        {/* navigation */}
        <div className='nav-container'>
            <div className='nav-a'><a href='https://google.com'>About</a></div>
            <div className='nav-a'>Work</div>
            <div className='nav-a'>Services</div>
            <div className='nav-a'>Contact</div>
        </div>
        {/* social media buttons  */}
        <div className="wrapper">
          <button className="btn">
            <i className="ri-share-line"></i>
          </button>
          <ul class="list">
            <li class="item">
              <a href="https://google.com" class="link ig">
                <i class="ri-instagram-line"></i>
              </a>
            </li>
             <li class="item" /* style="--d: .25s;" */> 
              <a href="https://google.com" class="link tw">
                <i class="ri-twitter-line"></i>
              </a>
            </li>
            <li class="item" /* style="--d: .5s;" */>
              <a href="https://google.com" class="link sc">
                <i class="ri-snapchat-line"></i>
              </a>
            </li>
          </ul>
        </div>
    
    </div>
  )
}

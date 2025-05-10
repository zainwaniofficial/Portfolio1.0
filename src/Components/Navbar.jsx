import React from 'react'

function Navbar() {
  return (
    <>
    <div className='navbar-container'>
        <div className='leftNav'> <span className="logo-span">&lt;C/&gt;
        </span>SinanTokman</div>
        <div className='rightNav'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar

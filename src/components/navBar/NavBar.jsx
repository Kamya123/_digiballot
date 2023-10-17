import React from 'react'
import { Link } from 'react-router-dom'
import '../navBar/navBar.css'
import '../../pages/home/home.css'
// import { BsPersonFillGear } from "react-icons/bs"



const NavBar = () => {
  return (
    <nav>
      <h1 id="logo">digiballot</h1>
      <ul className="nav-mid">
        <li><a href="" target='_blank'>Features</a></li>
        <li><a href="" target='_blank'>How It Works</a></li>
        <li><a href="" target='_blank'>Pricing</a></li>
      </ul>
      <div className="nav-right">
        <Link to="/Vote" className='btn-wbg' >Log In</Link>
        <Link to="/Vote" className='btn' >Sign Up</Link>
      </div>
    </nav>
  )
}

export default NavBar

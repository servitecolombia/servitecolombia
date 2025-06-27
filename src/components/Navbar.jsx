import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/log.jpg'


const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>

      <div className={`menu-toggle ${menuAbierto ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuAbierto ? 'active' : ''}`}>
        <li><NavLink to="/servitecolombia/" end onClick={() => setMenuAbierto(false)}>Inicio</NavLink></li>
        <li><NavLink to="/servitecolombia/about" onClick={() => setMenuAbierto(false)}>About</NavLink></li>
        <li><NavLink to="/servitecolombia/contact" onClick={() => setMenuAbierto(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar

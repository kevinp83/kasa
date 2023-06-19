import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <nav className='header'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='link'>
        <NavLink className='link-style' to="/" activeClassName="active">Accueil </NavLink>
        <NavLink className='link-style' to="/about">A Propos</NavLink>
      </div>  
    </nav>
  )
}

export default Header
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <nav className='header'>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='link'>
        <Link className='link-style' to="/">Accueil</Link>
        <Link className='link-style' to="/about">A Propos</Link>
      </div>  
    </nav>
  )
}

export default Header
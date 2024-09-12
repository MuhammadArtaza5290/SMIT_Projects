import image from '../../assets/preview1.jpeg'
import './Navbar.css'
import {Button} from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import React,{useRef} from 'react';
function Navbar() {
    const menuRef = useRef();
    const openMenu = () =>{
        menuRef.current.style.right = "0";
    }
    const closeMenu =() => {
        menuRef.current.style.right = "-350px";
    }
    return(
        <>

        <nav className='nav'>
        <img src={image} alt="Logo" className='navbarImg'/>
        
        <FontAwesomeIcon icon={faBarsStaggered} onClick={openMenu} className='barIcon'/>
        <ul ref={menuRef} className='nav-menue'>
        <FontAwesomeIcon icon={faXmark} onClick={closeMenu} className='crossIcon'/> 
            <li><p><a href='/' className='navLink'>Home</a></p></li>
            <li><p><a href='/' className='navLink'>About Me</a></p></li>
            <li><p><a href='/' className='navLink'>Services</a></p></li>
            <li><p><a href='/' className='navLink'>Portfolio</a></p></li>
            <li><p><a href='/' className='navLink'>Contact</a></p></li>
        </ul>
        <Button label="Connect With Me"/>
        </nav>
        </>
    )
}
export default Navbar
import { useRef } from 'react';
import './Header.css'

function Header(){

    const menuToggleRef = useRef(null);

    const closeMenu = () => {
        if (menuToggleRef.current) {
            menuToggleRef.current.checked = false;
        }
    };

    return(
        <div className="header-div">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" ref={menuToggleRef}/>
            <label htmlFor="menu-toggle" className="mobile-menu-button">
                ☰
            </label>
            <h1>Leonardo</h1>
            <div className="page-contents">
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="mobile-menu-button">
                    ☰
                </label>
                <a href="#HOME" className='links' onClick={closeMenu}>Home</a>
                <a href="#ABOUT" className='links' onClick={closeMenu}>About</a>
                <a href="#SKILLS" className='links' onClick={closeMenu}>Skills</a>
                <a href="#PROJECTS" className='links' onClick={closeMenu}>Projects</a>
                <a href="#CONTACT" className='links' onClick={closeMenu}>Contact Me</a>
                <div className="social-links">
                    <a href="https://github.com/Leonardo-Figueiredo-do-Nascimento" target="_blank"><img id='github'  src="public/Photos/github-icon.png"/></a>
                    <a href="https://www.linkedin.com/in/leonardo-figueiredo-do-nascimento-087724231/?locale=en_US" target="_blank"><img src="public/Photos/linkedin-icon.png"/></a>
                    <a href="mailto:leonardofigueiredodonascimento@gmail.com"><img id='mail' src="public/Photos/email-icon-2.jpg"/></a>
                </div>
            </div>
        </div>
    )
}

export default Header
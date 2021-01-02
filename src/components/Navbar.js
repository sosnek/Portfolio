import React, {useState,useEffect} from 'react';
import {Link} from 'react-scroll';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container" id="navbar-id">
                    <Link to='background-id' className="navbar-logo" smooth={true} duration={1000} onClick= {closeMobileMenu}>
                        Adam 
                        <i class="fas fa-code" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='background-id' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='about-id' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='cards-id' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='resume-id' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li>
                    </ul>
                    {button && <Button href="https://github.com/sosnek" buttonStyle ='btn--outline'><i className="fa fa-github fa-2x" /> </Button>}
                    &nbsp;&nbsp;&nbsp;
                    {button && <Button href="https://linkedin.com/in/adam-sosnowski-40b996156" buttonStyle ='btn--outline'><i className="fa fa-linkedin fa-2x" /> </Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;

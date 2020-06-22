import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';


class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    
    render() {
        return (
            <div className="navbar">
                <Link 
                    activeClass="active"
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >About Me</Link>
                <Link 
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >Resume</Link>
                <Link 
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                >Contact</Link>
            </div>
            
            
        )
    }
}

export default Navbar;
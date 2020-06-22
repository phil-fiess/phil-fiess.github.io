import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profileImage from '../img/phil-avatar.png';
import ReactTypingEffect from 'react-typing-effect';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>    
                        <img
                          src={profileImage}
                          alt="Phil Fiess avatar"
                          className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1><ReactTypingEffect className="typingeffect" text={['Phil Fiess','Programmer and IT']} speed={100} eraseDelay={700}/></h1>
                        <hr/>

                        <p>HTML/CSS | JavaScript | React | JQuery | Python | Django | C++ | Java | IT | PostgreSQL | QML/QtCreator</p>
                        <div className="social-links">
                            
                            {/* LinkedIn */}
                            <a href="https://ca.linkedin.com/in/pfiess" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* GitHub */}
                            <a href="https://github.com/phil-fiess" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
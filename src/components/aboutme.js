import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="aboutme">
                <Grid className="about-grid">
                    {/* <Cell col={1}></Cell> */}
                    <Cell className="about-me" col={12} style={{textAlign: 'center'}}>
                    <h2 style={{padding: '1em'}}>About Me</h2>
                    <hr style={{borderTop: '3px solid #833FB2', width: '100%'}} />
                    <h5>Hi there, my name is Phil. I'm a native of Calgary, AB, Canada and a recent graduate in Computer Science. I have experience in IT, web development, 
                        desktop application development, UX/UI, and QA through various internships in the Vancouver, BC area where I currently reside. On my spare time 
                        I am currently honing my skills in the above as well as learning to work with cybersecurity and microcontrollers when I'm not climbing mountains, 
                        cycling, playing music or learning more about new innovations and technology.           
                    </h5>
                    <hr style={{borderTop: '3px solid #833FB2', width: '100%'}} />
                    </Cell>
                    {/* <Cell col={1}></Cell> */}
                </Grid>
            </div>
        )
    }
}

export default AboutMe;
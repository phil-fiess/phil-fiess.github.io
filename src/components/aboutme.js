import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import flatIron from '../img/phil-flatiron.jpg'


class AboutMe extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}} id="aboutme">
                <Grid className="about-grid">
                    {/* <Cell col={1}></Cell> */}
                    <Cell className="about-me" col={12} style={{textAlign: 'center'}}>
                    <div style={{ textAlign: "center", maxWidth: '100%'}}>
                        <img 
                            src={flatIron}
                            alt="avatar"
                            style={{height: '300px', maxWidth: 'auto',  borderRadius: '75%' }}
                        />
                    </div>
                    <h2 style={{padding: '1em'}}>About Phil</h2>
                    <hr style={{borderTop: '3px solid #833FB2', width: '100%'}} />
                    <p>Phil is a native of Calgary, AB, Canada. He has been studying Computer Science for the past 3 years, having worked
                        in departments such as IT for his College as well as UI Programming and QA testing recently for AbCellera Biologics Inc,
                        a reknowned biotech firm homegrown in Vancouver, BC where he currently resides finishing the last bit of 
                        coursework for his degree. He currently is learning and programming web content for personal projects using React and Django
                        as well as learning circuitry doing projects with Arduino. 
                        When not working on his digital interests, Phil can be found in the backcountry surrounding his city, 
                        playing one of the many instruments he enjoys, or exploring new locations globally and reading about new innovations and technology.
                    </p>
                    <hr style={{borderTop: '3px solid #833FB2', width: '100%'}} />
                    </Cell>
                    {/* <Cell col={1}></Cell> */}
                </Grid>
            </div>
        )
    }
}

export default AboutMe;
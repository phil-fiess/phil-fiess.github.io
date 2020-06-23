import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Contact extends Component {
    render() {
        return (
            <div className="contact-body" id="contact">
                <Grid className="contact-grid">
                    {/* <Cell col={1}></Cell> */}
                    <Cell col={12}>
                        <h2 style={{fontFamily: 'Oxygen'}}>Contact Phil</h2>
                        <div className="contact-list">
                            
                            <div id="desktop-contact">
                                <ul>
                                    <li style={{fontFamily: 'Oxygen'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (778) - 870 - 8480
                                    </li>
                                    <li style={{fontFamily: 'Oxygen'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        pfiess@protonmail.com
                                    </li>
                                </ul>                              
                            </div>  

                            <div id="mobile-contact">
                            <ul>
                                <li style={{fontFamily: 'Oxygen'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                </li>
                                <li style={{fontFamily: 'Oxygen'}}>778-870-8480</li>
                                <li style={{fontFamily: 'Oxygen'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </li>
                                <li style={{fontFamily: 'Oxygen'}}>
                                pfiess@protonmail.com
                                </li>
                            </ul>
                            </div>


                            <hr style={{width: '100%', borderBottom: '2px solid grey', opacity: '50%'}} />                          
                            <footer>
                                <span>&#169;Copyright Phil Fiess 2020</span>
                                <p>Background image credit to unsplash.com (top: Irene Dávila, bottom: Dave Hoefler)</p>
                            </footer>
                        </div>
                    </Cell>
                    {/* <Cell col={1}></Cell> */}
                </Grid>
            </div>
        )
    }
}

export default Contact;
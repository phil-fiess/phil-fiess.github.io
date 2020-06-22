import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Contact extends Component {
    render() {
        return (
            <div className="contact-body" id="contact">
                <Grid className="contact-grid">
                    <Cell col={1}></Cell>
                    <Cell col={10}>
                        <h2 style={{fontFamily: 'Oxygen'}}>Contact Phil</h2>
                        <div className="contact-list">
                            <ul>
                                <li style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" />
                                    (778) - 870 - 8480
                                </li>
                                <li style={{fontSize: '25px', fontFamily: 'Oxygen'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    pfiess@protonmail.com
                                </li>
                            </ul>                          
                        </div>
                    </Cell>
                    <Cell col={1}></Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
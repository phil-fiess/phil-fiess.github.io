import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Footer extends Component {
    render(){
        return (
            <div>
                <Grid className="footer">
                    <Cell col={12}>
                        <footer>
                            <span>&#169;Copyright Phil Fiess 2020</span>
                            <p>Background image credit to unsplash.com (top: Irene Dávila, bottom: Dave Hoefler)</p>
                        </footer>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Footer;
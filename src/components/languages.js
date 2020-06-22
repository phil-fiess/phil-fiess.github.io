import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class Languages extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}>{this.props.skill}
                        <ProgressBar style={{margin: 'auto', width: '60%', }} 
                                     progress={this.props.progress} 
                        />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Languages;
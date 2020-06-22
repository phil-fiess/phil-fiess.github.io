import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <h6 style={{margin: '0', marginTop: '10px'}}>{this.props.category}</h6>
                    <ul className="skills">
                        <li>
                            <p>{this.props.skill1}</p>
                        </li>
                        <li>
                            <p>{this.props.skill2}</p>
                        </li>
                        <li>
                            <p>{this.props.skill3}</p>
                        </li>
                        <li>
                            <p>{this.props.skill4}</p>
                        </li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;
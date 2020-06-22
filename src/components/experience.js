import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={3}>
                    <h6 style={{margin: '0'}}>
                        {this.props.startMonth} {this.props.startYear} - 
                        {this.props.endMonth} {this.props.endYear}
                    </h6>
                </Cell>

                <Cell col={9}>
                    <h6 style={{margin: '0', fontWeight: 'bold'}}>
                        {this.props.position} | {this.props.employer} | {this.props.location}
                    </h6>
                    <ul className="skill-statements">
                        <li>
                            <p>{this.props.skillStatement1}</p>
                        </li>
                        <li>
                            <p>{this.props.skillStatement2}</p>
                        </li>
                        <li>
                            <p>{this.props.skillStatement3}</p>
                        </li>
                        <li>
                            <p>{this.props.skillStatement4}</p>
                        </li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;
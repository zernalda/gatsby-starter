import React, { Component } from 'react';
import Header from '../components/Header';

class About extends Component {
    render() {
        return (
            <div>
                <Header headerText="about gatsby"/>
                <p>this is about</p>
            </div>
        );
    }
}

export default About;
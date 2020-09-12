import React, { Component } from 'react';
import { Link } from 'gatsby';
import Header from '../components/Header';

class Contact extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Header headerText="Contact"/>
                <p>Send message to us!</p> 
            </div>
        );
    }
}

export default Contact; 
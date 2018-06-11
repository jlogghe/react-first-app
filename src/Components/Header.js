import React, { Component } from 'react';

import Navigation from './Navigation';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>{this.props.title}</h1>
                <Navigation />
            </div>
        );
    };
}

export default Header;
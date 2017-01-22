import React from "react";
import ReactDOM from "react-dom";
import {Link, IndexLink} from 'react-router';

class App extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
        <div>
            <ul>
                <li><IndexLink to="/">Home</IndexLink></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/repos/allen">repos</Link></li>
                <li><Link to="/user">user</Link></li>
            </ul>
            {this.props.children}
        </div>

        );
    }
}

module.exports = App;
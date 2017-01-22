const React = require('react');
import {Link, IndexLink} from "react-router";

class Home extends React.Component{
    constructor (...args) {
        super(...args);
        this.state = {
            content: ''
        };
    }

    render() {
        return (
            <div>
                我是Home
            </div>

        );
    }
}

module.exports = Home;
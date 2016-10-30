const React = require('react');

class Home extends React.Component{
    constructor (...args) {
        super(...args);
        this.state = {
            content: ''
        };
    }

    render() {
        return (
            <div className="Publisher">
                Home
            </div>
        );
    }
}

module.exports = Home;
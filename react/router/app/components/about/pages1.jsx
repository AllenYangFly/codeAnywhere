const React = require('react');


class Page1 extends React.Component{
    constructor (...args) {
        super(...args);
        this.state = {
            content: ''
        };
    }

    render() {
        return (
            <div className="Publisher">
                我是about
            </div>
        );
    }
}

module.exports = Page1;
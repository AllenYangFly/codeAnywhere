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
                pages1
            </div>
        );
    }
}

module.exports = Page1;
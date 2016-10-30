const React = require('react');

class Page2 extends React.Component{
    constructor (...args) {
        super(...args);
        this.state = {
            content: ''
        };
    }

    render() {
        return (
            <div className="Publisher">
                pages2
            </div>
        );
    }
}

module.exports = Page2;
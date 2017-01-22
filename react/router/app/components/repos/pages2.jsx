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
                我是Repos
            </div>
        );
    }
}

module.exports = Page2;
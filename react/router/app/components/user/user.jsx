import React from "react";
import ReactDom from "react-dom";

class User extends React.Component{
    constructor(...args) {
        super(...args);
    }
    render() {
        return (
            <div>
                我是User
            </div>
        );
        
    }
}

module.exports = User;
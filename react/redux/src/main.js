import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux';

import Timer from './Timer.jsx';
import AjaxDemo from './AjaxDemo.jsx';
// import ReduxDemo from './ReduxDemo1.jsx';

class Text extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: "内容为空"
        };
    }

    handleChange () {
        this.setState({value: this.refs.textArea.value});
    }

    rawMarkup() {
        const md = new Remarkable();
        return { __html: md.render(this.state.value) };     
    }

    render () {
        return (
            <div>
                <textarea onChange = {this.handleChange} ref="textArea">
                    
                </textarea>

                <div  className="content" dangerouslySetInnerHTML={this.rawMarkup()}>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<AjaxDemo source="https://api.github.com/users/torvalds"/>,document.getElementById("root"));
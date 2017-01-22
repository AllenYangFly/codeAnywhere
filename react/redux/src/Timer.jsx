import  React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.state = {
            value:"内容为空"
        };
    }

    componentWillMount() {
        console.log("componentWillMount");
        console.log(document.getElementById('mark'));   // mark不可以找到
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log(document.getElementById('mark'));   //mark可以找到
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");       //已载入组件收到参数
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');     //state将要改变之前
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');      //state将要改变之后
    }



    handle() {

        this.setState({
            value: "内容已改变"
        });
        
    }

    render() {
        return (
            <div id="mark1"  onClick = {this.handle}><span >1234</span>{this.state.value}</div>
        );
    }
}

Timer.propTypes = {
    name: React.PropTypes.string,
}

Timer.defaultProps = {
    name:'',
}



export default Timer
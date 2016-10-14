const React = require('react');
const style = require('./Publisher.scss');

class Publisher extends React.Component {
    constructor (...args) {
        super(...args);
        this.state = {
            content: ''
        };
    }

    /**
    * 获取焦点
    */
    handleFocus() {
        // 改变边框颜色    
        this.refs.textElDiv.style.borderColor = "#fa7d3c";
        // 改变左上角信息
        this.refs.hot.style.display = "none";
        this.refs.tips.style.display = "block";
    }

    /**
    * 失去焦点
    */
    handleBlur() {
        // 改变边框颜色    
        this.refs.textElDiv.style.borderColor = "#cccccc";
        // 改变左上角信息
        this.refs.hot.style.display = "block";
        this.refs.tips.style.display = "none";
    }

    /**
    * 输入框内容变化
    */ 
    handleChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    render() {
        return (
            <div className="Publisher">
                <div className="title">
                    <div ref="hot">
                        <a href="javascript:void(0);">网友曝光两女孩蹲着等地铁,称没教养,你怎么看(投票)</a>
                    </div>
                    <div className="tips" ref="tips">
                        <span>{this.state.content.length > 140 ? '已超出' : '还可以输入'}</span><strong>{this.state.content.length > 140 ? this.state.content.length - 140 : 140 - this.state.content.length}</strong>字
                    </div>    
                </div>
                <div className="textElDiv" ref="textElDiv">
                    <textarea onFocus={this.handleFocus.bind(this) } onBlur={this.handleBlur.bind(this)} onChange={this.handleChange.bind(this)}></textarea> 
                </div>
                <div className="btnWarp">
                    <button className="btn" >发布</button>
                </div>
            </div>
        );
    }
}

module.exports = Publisher;
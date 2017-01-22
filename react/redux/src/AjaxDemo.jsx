import React from 'react';
import ReactDOM from 'react-dom';

class AjaxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.ajax = this.ajax.bind(this);
        
        this.state = {
            userName:"",
            url:"",
            htmlUrl:""
        };
    }

    componentDidMount() {
        this.ajax();
    }

    ajax () {
        var _that = this;
        
        var xhr = null;
        xhr = new XMLHttpRequest();
        xhr.open('get',this.props.source,true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if( xhr.readyState == 4 ) {
                if( xhr.status == 200 ) {
                    success(xhr.responseText);
                }else {
                    alert("url error");
                }
            }
        };
        
        function success(data) {
            var data = JSON.parse(data);

            _that.setState({
                userName: data.login,
                url: data.url,
                htmlUrl: data.html_url
            });
            console.log(data);
        }
    }
    
    render() {
        return (
            <div>
                <p>{this.state.userName}</p>
                <p>{this.state.url}</p>
                <p>{this.state.htmlUrl}</p>
            </div>
        );
    }
}

AjaxDemo.propTypes = {
    source: React.PropTypes.string
};


export default AjaxDemo
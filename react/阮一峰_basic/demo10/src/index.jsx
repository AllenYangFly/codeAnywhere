var Footer = require("./Footer.jsx");

var Hello = React.createClass({
    getInitialState: function() {
        return {opacity: 1.0};
    },
    componentDidMount: function() {
        this.timer = setInterval(function() {
            var opacity = this.state.opacity;
            opacity -= .05;
            if ( opacity < .1 ){
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this),200);
    },
    render: function() {
        return (
            <div style={{opacity: this.state.opacity,color: 'red'}}>
               
                Hello {this.props.name}{this.state.opacity}
                <Footer/>
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.getElementById("example")    
);


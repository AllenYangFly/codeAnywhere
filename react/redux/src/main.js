import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux';

const store = createStore();
const state = store.getState();

const action = {
    type: "ADD_TODO",
    payload: 'Learn Redux'
};



class Greeter extends React.Component{
  render() {
    return (
      <div>
        12
      </div>
    );
  }
}



ReactDOM.render(<Greeter/>, document.getElementById("root"));
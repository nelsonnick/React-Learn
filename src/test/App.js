import React from 'react';
import ReactDOM from 'react-dom';
import SubComponent from './SubComponent';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.refs);
    console.log(this.refs.subcomponents);
    this.refs.subcomponents.subHandleClick();
  }
  render() {
    return (
      <div>
        <input
          type="button"
          value="点我调用子组件方法"
          onClick={this.handleClick}
        />
        <SubComponent ref="subcomponents" />
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.body);

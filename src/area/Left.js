import SystemMenu from '../component/SystemMenu.js';
import React from 'react';

export default class Left extends React.Component {

  constructor(props) {
    super(props);
    this.menuFunctionLeft = 'teacher';
    this.menuFunctionLefts = this.menuFunctionLefts.bind(this);
  }

  menuFunctionLefts(functionName) {
    this.menuFunctionLeft = `Hi, ${functionName}?`;
    console.log(this.menuFunctionLeft);
    this.props.menuFunctionAll(this.menuFunctionLeft);
  }

  render() {
    return (
      <div>
        <SystemMenu menuFunctionLeft={this.menuFunctionLefts} />
      </div>
    );
  }
}
Left.propTypes = {
  menuFunctionAll: React.PropTypes.func,
};

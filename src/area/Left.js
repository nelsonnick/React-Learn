import SystemMenu from '../component/SystemMenu.js';
import React from 'react';

export default class Left extends React.Component {

  constructor(props) {
    super(props);
    this.menuFunctionLefts = this.menuFunctionLefts.bind(this);
  }

  menuFunctionLefts(functionName) {
    this.props.menuFunctionAll(functionName);
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

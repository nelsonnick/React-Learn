import SystemMenu from '../component/SystemMenu.js';
import React from 'react';

export default class Left extends React.Component {

  constructor(props) {
    super(props);
    this.setMenuLabel = this.setMenuLabel.bind(this);
  }

  setMenuLabel(labelName) {
    this.props.menuLabel(labelName);
  }

  render() {
    return (
      <div>
        <SystemMenu menuLabel={this.setMenuLabel} />
      </div>
    );
  }
}
Left.propTypes = {
  menuLabel: React.PropTypes.func,
};

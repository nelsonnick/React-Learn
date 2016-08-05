import { Menu, Icon } from 'antd';
import React from 'react';
const SubMenu = Menu.SubMenu;

export default class SystemMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '1',
      openKeys: [],
    };
    this.onToggle = this.onToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }

  handleClick(e) {
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 240 }}
        openKeys={this.state.openKeys}
        onOpen={this.onToggle}
        onClose={this.onToggle}
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
          <Menu.Item key="1"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher')}>教师管理</a></Menu.Item>
          <Menu.Item key="2"><a onClick={this.props.menuFunctionLeft.bind(this, 'student')}>学生管理</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuFunctionLeft: React.PropTypes.func,
};

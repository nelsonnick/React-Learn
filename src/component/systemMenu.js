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
          <Menu.Item key="1"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher1')}>教师管理1</a></Menu.Item>
          <Menu.Item key="2"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher2')}>教师管理2</a></Menu.Item>
          <Menu.Item key="3"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher3')}>教师管理3</a></Menu.Item>
          <Menu.Item key="4"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher4')}>教师管理4</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>导航二</span></span>}>
          <Menu.Item key="5"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher5')}>教师管理5</a></Menu.Item>
          <Menu.Item key="6"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher6')}>教师管理6</a></Menu.Item>
          <Menu.Item key="7"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher7')}>教师管理7</a></Menu.Item>
          <Menu.Item key="8"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher8')}>教师管理8</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuFunctionLeft: React.PropTypes.func,
};

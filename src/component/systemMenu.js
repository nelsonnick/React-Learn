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
    const { menuFunctionLeft } = this.props;
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
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>档案管理</span></span>}>
          <Menu.Item key="11"><a onClick={() => menuFunctionLeft('teacher')}>档案信息</a></Menu.Item>
          <Menu.Item key="12"><a onClick={() => menuFunctionLeft('student')}>档案变更</a></Menu.Item>
          <Menu.Item key="13"><a onClick={() => menuFunctionLeft('student')}>档案流动</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>人员管理</span></span>}>
          <Menu.Item key="21"><a onClick={() => menuFunctionLeft('teacher')}>人员信息</a></Menu.Item>
          <Menu.Item key="22"><a onClick={() => menuFunctionLeft('student')}>信息变更</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>统计分析</span></span>}>
          <Menu.Item key="31"><a onClick={() => menuFunctionLeft('teacher')}>档案分析</a></Menu.Item>
          <Menu.Item key="32"><a onClick={() => menuFunctionLeft('student')}>人员分析</a></Menu.Item>
          <Menu.Item key="33"><a onClick={() => menuFunctionLeft('student')}>业务分析</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
          <Menu.Item key="41"><a onClick={() => menuFunctionLeft('teacher')}>密码管理</a></Menu.Item>
          <Menu.Item key="42"><a onClick={() => menuFunctionLeft('teacher')}>部门管理</a></Menu.Item>
          <Menu.Item key="43"><a onClick={() => menuFunctionLeft('student')}>用户管理</a></Menu.Item>
          <Menu.Item key="44"><a onClick={() => menuFunctionLeft('student')}>角色管理</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuFunctionLeft: React.PropTypes.func,
};

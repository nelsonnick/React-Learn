import { Menu, Icon } from 'antd';
import React from 'react';
import MenuLabel from './MenuLabel.js';
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
    this.setMenuLabel = this.setMenuLabel.bind(this);
  }

  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }

  setMenuLabel(labelName) {
    this.props.menuLabel(labelName);
  }

  handleClick(e) {
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
  }

  render() {
    const { menuLabel } = this.props;
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
          <Menu.Item key="11"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="teacher" menuLabelName="档案信息" /></Menu.Item>
          <Menu.Item key="12"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="student" menuLabelName="档案变更" /></Menu.Item>
          <Menu.Item key="13"><a onClick={() => menuLabel('student')}>档案流动</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>人员管理</span></span>}>
          <Menu.Item key="21"><a onClick={() => menuLabel('teacher')}>人员信息</a></Menu.Item>
          <Menu.Item key="22"><a onClick={() => menuLabel('student')}>信息变更</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>统计分析</span></span>}>
          <Menu.Item key="31"><a onClick={() => menuLabel('teacher')}>档案分析</a></Menu.Item>
          <Menu.Item key="32"><a onClick={() => menuLabel('student')}>人员分析</a></Menu.Item>
          <Menu.Item key="33"><a onClick={() => menuLabel('student')}>业务分析</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
          <Menu.Item key="41"><a onClick={() => menuLabel('teacher')}>密码管理</a></Menu.Item>
          <Menu.Item key="42"><a onClick={() => menuLabel('teacher')}>部门管理</a></Menu.Item>
          <Menu.Item key="43"><a onClick={() => menuLabel('student')}>用户管理</a></Menu.Item>
          <Menu.Item key="44"><a onClick={() => menuLabel('student')}>角色管理</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuLabel: React.PropTypes.func,
};

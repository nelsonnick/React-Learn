import { Menu, Icon } from 'antd';
import React from 'react';
import MenuLabel from './MenuLabel.js';
const SubMenu = Menu.SubMenu;
const power = {
  'DocInfo': true,
  'DocChan': false,
  'DocFlow': true,
  'PerInfo': false,
  'PerChan': false,
  'DocAnal': false,
  'PerAnal': false,
  'OpeAnal': false,
  'PasCont': false,
  'DepCont': false,
  'UseCont': false,
  'RolCont': false,
};

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

  componentDidMount() {
    console.log(power.DocInfo);
  }

  onToggle(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });
  }

  setMenuLabel(labelName) {
    console.log(labelName);
    this.props.menuLabel(labelName);
  }

  handleClick(e) {
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
  }

  render() {
    let items = [];
    if (power.DocInfo) {
      items.push(<Menu.Item key="DocInfo"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocInfo" menuLabelName="档案信息" /></Menu.Item>);
    }
    if (power.DocChan) {
      items.push(<Menu.Item key="DocChan"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocChan" menuLabelName="档案变更" /></Menu.Item>);
    }
    if (power.DocFlow) {
      items.push(<Menu.Item key="DocFlow"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocFlow" menuLabelName="档案流动" /></Menu.Item>);
    }

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
          {items}
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>人员管理</span></span>}>
          <Menu.Item key="PerInfo"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="PerInfo" menuLabelName="人员信息" /></Menu.Item>
          <Menu.Item key="PerChan"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="PerChan" menuLabelName="信息变更" /></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>统计分析</span></span>}>
          <Menu.Item key="DocAnal"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocAnal" menuLabelName="档案分析" /></Menu.Item>
          <Menu.Item key="PerAnal"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="PerAnal" menuLabelName="人员分析" /></Menu.Item>
          <Menu.Item key="OpeAnal"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="OpeAnal" menuLabelName="业务分析" /></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>系统管理</span></span>}>
          <Menu.Item key="PasCont"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="PasCont" menuLabelName="密码管理" /></Menu.Item>
          <Menu.Item key="DepCont"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DepCont" menuLabelName="部门管理" /></Menu.Item>
          <Menu.Item key="UseCont"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="UseCont" menuLabelName="用户管理" /></Menu.Item>
          <Menu.Item key="RolCont"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="RolCont" menuLabelName="角色管理" /></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuLabel: React.PropTypes.func,
};

import { Menu, Icon } from 'antd';
import React from 'react';
import MenuLabel from './MenuLabel.js';
const SubMenu = Menu.SubMenu;
const rolePower = [
  { 'Func': 'Doc',
    'Name': '档案管理',
    'Type': 'file',
    'Stat': true,
    'Data': [
      { 'Func': 'DocInfo', 'Name': '档案信息', 'Stat': true, 'Type': 'bars' },
      { 'Func': 'DocChan', 'Name': '档案变更', 'Stat': true, 'Type': 'book' },
      { 'Func': 'DocFlow', 'Name': '档案流动', 'Stat': true, 'Type': 'mail' },
    ],
  },
  { 'Func': 'Per',
    'Name': '人员管理',
    'Type': 'team',
    'Stat': true,
    'Data': [
      { 'Func': 'PerInfo', 'Name': '人员信息', 'Stat': true, 'Type': 'bars' },
      { 'Func': 'PerChan', 'Name': '信息变更', 'Stat': true, 'Type': 'book' },
    ],
  },
  { 'Func': 'Anal',
    'Name': '统计分析',
    'Type': 'pie-chart',
    'Stat': true,
    'Data': [
      { 'Func': 'DocAnal', 'Name': '档案分析', 'Stat': true, 'Type': 'area-chart' },
      { 'Func': 'PerAnal', 'Name': '人员分析', 'Stat': true, 'Type': 'bar-chart' },
      { 'Func': 'OpeAnal', 'Name': '业务分析', 'Stat': true, 'Type': 'line-chart' },
    ],
  },
  { 'Func': 'Cont',
    'Name': '系统管理',
    'Type': 'setting',
    'Stat': true,
    'Data': [
      { 'Func': 'PasCont', 'Name': '密码管理', 'Stat': true, 'Type': 'ellipsis' },
      { 'Func': 'DepCont', 'Name': '部门管理', 'Stat': true, 'Type': 'laptop' },
      { 'Func': 'UseCont', 'Name': '用户管理', 'Stat': true, 'Type': 'user' },
      { 'Func': 'RolCont', 'Name': '角色管理', 'Stat': true, 'Type': 'solution' },
    ],
  },
];

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
    console.log();
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
    const getMenu = [];
    for (let j = 0; j < rolePower.length; j++) {
      if (rolePower[j].Stat) {
        const getSubMenu = [];
        for (let i = 0; i < rolePower[j].Data.length; i++) {
          if (rolePower[j].Data[i].Stat) {
            getSubMenu.push(<Menu.Item key={rolePower[j].Data[i].Func}><span><Icon type={rolePower[j].Data[i].Type} /><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction={rolePower[j].Data[i].Func} menuLabelName={rolePower[j].Data[i].Name} /></span></Menu.Item>);
          }
        }
        getMenu.push(<SubMenu key={rolePower[j].Func} title={<span><Icon type={rolePower[j].Type} /><MenuLabel menuLabelName={rolePower[j].Name} /></span>} children={getSubMenu} />);
      }
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
          <Menu.Item key="DocInfo"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocInfo" menuLabelName="档案信息" /></Menu.Item>
          <Menu.Item key="DocChan"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocChan" menuLabelName="档案变更" /></Menu.Item>
          <Menu.Item key="DocFlow"><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction="DocFlow" menuLabelName="档案流动" /></Menu.Item>
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
        {getMenu}
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuLabel: React.PropTypes.func,
};

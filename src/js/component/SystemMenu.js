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
  }

  handleClick(e) {
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });
    this.props.menuLabel(e.key);
  }

  render() {
    const { rolePower } = this.props;
    const getMenu = [];
    for (let j = 0; j < rolePower.length; j++) {
      if (rolePower[j].Stat) {
        const getSubMenu = [];
        for (let i = 0; i < rolePower[j].Data.length; i++) {
          if (rolePower[j].Data[i].Stat) {
            getSubMenu.push(<Menu.Item key={rolePower[j].Data[i].Func}><span><Icon type={rolePower[j].Data[i].Type} /><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction={rolePower[j].Data[i].Func} menuLabelName={rolePower[j].Data[i].Name} /></span></Menu.Item>);
          }
        }
        getMenu.push(<SubMenu key={rolePower[j].Func} title={<span><Icon type={rolePower[j].Type} /><MenuLabel menuLabel={this.setMenuLabel} menuLabelFunction={rolePower[j].Func} menuLabelName={rolePower[j].Name} /></span>} children={getSubMenu} />);
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
        {getMenu}
      </Menu>
    );
  }
}
SystemMenu.propTypes = {
  menuLabel: React.PropTypes.func,
  rolePower: React.PropTypes.array,
};

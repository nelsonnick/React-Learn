import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class SystemMenu extends React.Component {
    constructor(props){
        super(props)
        this.state={
            current: '1',
            openKeys: []
        }
    };

    handleClick(e) {
        //console.log('click ', e);
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1),
        });
    };
    onToggle(info) {
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });  
    };
    render() {
        return (
            <Menu onClick={this.handleClick.bind(this)}
                  style={{ width: 240 }}
                  openKeys={this.state.openKeys}
                  onOpen={this.onToggle.bind(this)}
                  onClose={this.onToggle.bind(this)}
                  selectedKeys={[this.state.current]}
                  mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                    <Menu.Item key="1"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher')}>教师管理</a></Menu.Item>
                    <Menu.Item key="2"><a onClick={this.props.menuFunctionLeft.bind(this, 'student')}>学生管理</a></Menu.Item>
                    <Menu.Item key="3"><a onClick={this.props.menuFunctionLeft.bind(this, 'parent')}>家长管理</a></Menu.Item>
                    <Menu.Item key="4"><a onClick={this.props.menuFunctionLeft.bind(this, 'classroom')}>班级管理</a></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="mail" /><span>导航二</span></span>}>
                    <Menu.Item key="5"><a onClick={this.props.menuFunctionLeft.bind(this, 'teacher')}>教师管理1</a></Menu.Item>
                    <Menu.Item key="6"><a onClick={this.props.menuFunctionLeft.bind(this, 'student')}>学生管理1</a></Menu.Item>
                    <Menu.Item key="7"><a onClick={this.props.menuFunctionLeft.bind(this, 'parent')}>家长管理1</a></Menu.Item>
                    <Menu.Item key="8"><a onClick={this.props.menuFunctionLeft.bind(this, 'classroom')}>班级管理1</a></Menu.Item>
                </SubMenu>
            </Menu>
        );
    };
}
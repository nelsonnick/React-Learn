
class Hello extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <div>Hello {this.props.name} {this.props.age}</div>;
    }

}
export default Hello;
import SystemMenu from "../component/SystemMenu.js"

export default class Left extends React.Component {

    constructor(props) {
        super(props);
        this.menuFunctionLeft = "teacher";
        this.menuFunctionLefts=this.menuFunctionLefts.bind(this);
    };

    menuFunctionLefts(functionName) {
        this.menuFunctionLeft = functionName;
        console.log(this.menuFunctionLeft);
        this.props.menuFunctionAll(functionName);

    };

    render() {
        return (
            <div>
                <SystemMenu menuFunctionLeft={this.menuFunctionLefts}/>
            </div>
        )
    }
}

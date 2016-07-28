import { Row, Col } from 'antd'
import Top from "./Top.js"
import Left from "./Left.js"
import Right from "./Right.js"
import 'antd/dist/antd.css'


class All extends React.Component {
    constructor(props) {
        super(props);
        this.menuFunctionAlls=this.menuFunctionAlls.bind(this);
    };
    menuFunctionAlls(functionName) {
        this.menuFunctionAll = functionName+"_a";
        console.log(this.menuFunctionAll);
    };
    //<Col span={16}><Right /></Col>
    render() {
        return(
            <div>
                <Row>
                    <Col span={24}><Top/></Col>
                </Row>
                <Row>
                    <Col span={8}><Left menuFunctionAll={this.menuFunctionAlls}/></Col>
                    <Col span={16}></Col>
                </Row>
            </div>
        )
    }
}
ReactDOM.render(<All/>,document.body);
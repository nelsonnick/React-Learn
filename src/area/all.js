import { Row, Col } from 'antd';
import Top from './Top.js';
import Left from './Left.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


class All extends React.Component {
  constructor(props) {
    super(props);
    this.menuFunctionAlls = this.menuFunctionAlls.bind(this);
  }
  menuFunctionAlls(functionName) {
    this.menuFunctionAll = `Hello, ${functionName}!`;
    console.log(this.menuFunctionAll);
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}><Top /></Col>
        </Row>
        <Row>
          <Col span={8}><Left menuFunctionAll={this.menuFunctionAlls} /></Col>
        </Row>
      </div>
    );
  }
}
ReactDOM.render(<All />, document.body);

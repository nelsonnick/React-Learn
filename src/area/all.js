import { Row, Col } from 'antd';
import Top from './Top.js';
import Left from './Left.js';
import Right from './Right.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';


class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuFunctionType: '',
    };
    this.menuFunctionAlls = this.menuFunctionAlls.bind(this);
  }
  menuFunctionAlls(functionName) {
    this.setState(
      {
        menuFunctionType: functionName,
      }
    );
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={24}><Top /></Col>
        </Row>
        <Row>
          <Col span={8}><Left menuFunctionAll={this.menuFunctionAlls} /></Col>
          <Col span={8}><Right menuFunctionType={this.state.menuFunctionType} /></Col>
        </Row>
      </div>
    );
  }
}
ReactDOM.render(<All />, document.body);

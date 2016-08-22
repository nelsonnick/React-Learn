import React from 'react';
import { Row } from 'antd';
import DepContTable from '../table/DepContTable.js';
import Paginate from '../component/Paginate.js';

export default class DepCont extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <DepContTable />
        </Row>
        <Row>
          <span style={{ 'font-size': '36px' }}>&nbsp;&nbsp;&nbsp;</span>
        </Row>
        <Row>
          <DepContTable />
        </Row>
        <Row>
          <span style={{ 'font-size': '36px' }}>&nbsp;&nbsp;&nbsp;</span>
        </Row>
        <Row>
          <Paginate />
        </Row>
      </div>
    );
  }
}

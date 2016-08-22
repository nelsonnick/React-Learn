import React from 'react';
import { Row } from 'antd';
import DepContTable from '../table/DepContTable.js';
import DepContSearch from '../search/DepContSearch.js';
import Paginate from '../component/Paginate.js';

export default class DepCont extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <DepContSearch />
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

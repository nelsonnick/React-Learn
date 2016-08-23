import React from 'react';
import { Row } from 'antd';
import DepContTable from '../table/DepContTable.js';
import DepContSearch from '../search/DepContSearch.js';
import Paginate from '../component/Paginate.js';
import $ from 'jquery';

let tableData;
export default class DepCont extends React.Component {
  constructor(props) {
    super(props);
    this.getQuery = this.getQuery.bind(this);
    this.fetch = this.fetch.bind(this);
  }
  componentWillMount() {
    tableData = $.ajax({
      'type': 'POST',
      'url': '/getList',
      'dataType': 'json',
      'success': () => {
        console.log("success");
      },
      'error': () => {
        console.log("error");
      },
    })
  }
  getQuery(queryString) {
    console.log(queryString);
  }

  render() {
    return (
      <div>
        <Row>
          <DepContSearch setQuery={this.getQuery} />
        </Row>
        <Row>
          <span style={{ 'font-size': '36px' }}>&nbsp;&nbsp;&nbsp;</span>
        </Row>
        <Row>
          <DepContTable tableData={tableData} />
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

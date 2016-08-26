import React from 'react';
import { Row } from 'antd';
import DataTable from './DataTable.js';
import DataSearch from './DataSearch.js';
import DataPagination from './DataPagination.js';
import AddButton from './AddButton.js';
import * as AjaxFunction from '../../../Util/AjaxFunction.js';
import $ from 'jquery';

export default class DepCont extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DataTable: [],
    };
    this.getQuery = this.getQuery.bind(this);
  }

  componentWillMount() {
    $.ajax({
      'type': 'POST',
      'url': AjaxFunction.DepartmentInit,
      'dataType': 'json',
      // 'data': { 'id': '1' },
      'success': (data) => {
        this.setState(
          {
            DataTable: data,
          }
        );
      },
      'error': () => {
        console.log('未查到数据');
      },
    });
  }
  getQuery(queryString) {
    console.log(queryString);
  }

  render() {
    return (
      <div>
        <Row>
          <AddButton />
        </Row>
        <Row>
          <DataSearch setQuery={this.getQuery} />
        </Row>
        <Row>
          <span style={{ 'font-size': '36px' }}>&nbsp;&nbsp;&nbsp;</span>
        </Row>
        <Row>
          <DataTable tableData={this.state.DataTable} />
        </Row>
        <Row>
          <span style={{ 'font-size': '36px' }}>&nbsp;&nbsp;&nbsp;</span>
        </Row>
        <Row>
          <DataPagination />
        </Row>
      </div>
    );
  }
}

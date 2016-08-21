import React from 'react';
import DepContTable from '../table/DepContTable.js';
import Paginate from '../component/Paginate.js';

export default class DepCont extends React.Component {
  render() {
    return (
      <div>
        <DepContTable />
        <Paginate />
      </div>
    );
  }
}

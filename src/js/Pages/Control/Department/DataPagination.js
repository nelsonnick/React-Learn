import React from 'react';
import { Pagination, Select } from 'antd';

export default class DataPagination extends React.Component {
  render() {
    return (
      <div>
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={50}
          showTotal={total => `共 ${total} 条`}
          selectComponentClass={Select}
        />
      </div>
    );
  }
}

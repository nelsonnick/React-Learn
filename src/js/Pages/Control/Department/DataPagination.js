import React from 'react';
import { Pagination, Select, Row } from 'antd';

export default class DataPagination extends React.Component {
  render() {
    return (
      <Row type="flex" justify="end">
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={50}
          showTotal={total => `共 ${total} 条`}
          selectComponentClass={Select}
        />
      </Row>
    );
  }
}

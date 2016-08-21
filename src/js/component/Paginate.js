import React from 'react';
import { Pagination, Select } from 'antd';

export default class Paginate extends React.Component {
  render() {
    return (
      <div>
        <Pagination
          showQuickJumper
          defaultCurrent={1}
          total={500}
          showTotal={total => `共 ${total} 条`}
          selectComponentClass={Select}
        />
      </div>
    );
  }
}

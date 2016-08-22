import { Table } from 'antd';
import React from 'react';

const columns = [{
  title: '部门名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '办公电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '办公地点',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '当前状态',
  dataIndex: 'state',
  key: 'state',
}, {
  title: '操作',
  key: 'operation',
  render: (text, record) => (
    <span>
      <a href="#">查看详情</a>
      <span className="ant-divider"></span>
      <a href="#">部门修改</a>
      <span className="ant-divider"></span>
      <a href="#">停用：{record.name}</a>
      <span className="ant-divider"></span>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: '胡彦斌',
  phone: '0531-87654321',
  address: '西湖区湖底公园1号',
  state: '可用',
}];
export default class DepContTable extends React.Component {
  render() {
    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    );
  }
}

DepContTable.defaultProps = {

};

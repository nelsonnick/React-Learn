import React from 'react';
import { Table, Popconfirm, message } from 'antd';

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
      <span className="ant-divider" />
      <a href="#">部门修改</a>
      <span className="ant-divider" />
      <Popconfirm title="确定要删除这个任务吗？" onConfirm={confirm} onCancel={cancel}>
        <a href="#">停用：{record.name}</a>
      </Popconfirm>
      <span className="ant-divider" />
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
  constructor(props) {
    super(props);
    this.confirm = this.confirm.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  confirm() {
    message.success('点击了确定');
  }

  cancel() {
    message.error('点击了取消');
  }
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

import React from 'react';
import { Table, Popconfirm, message } from 'antd';


export default class DataTable extends React.Component {
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
      render: (text, record) => {
        if (record.state === '可用') {
          return (
            <span>
              <a href="#">查看详情</a>
              <span className="ant-divider" />
              <a href="#">部门修改</a>
              <span className="ant-divider" />
              <Popconfirm title="确定要删除这个任务吗？" onConfirm={this.confirm} onCancel={this.cancel}>
                <a href="#">停用：{record.name}</a>
              </Popconfirm>
              <span className="ant-divider" />
            </span>
          );
        }
        return (
          <span>
            <a href="#">查看详情</a>
            <span className="ant-divider" />
            <a href="#">部门修改</a>
            <span className="ant-divider" />
            <Popconfirm title="确定要删除这个任务吗？" onConfirm={this.confirm} onCancel={this.cancel}>
              <a href="#">启用：{record.name}</a>
            </Popconfirm>
            <span className="ant-divider" />
          </span>
        );
      },
    }];
    const { tableData } = this.props;
    return (
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
      />
    );
  }
}

DataTable.propTypes = {
  tableData: React.PropTypes.array,
};

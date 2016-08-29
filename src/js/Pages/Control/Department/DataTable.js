import React from 'react';
import { Table, Popconfirm, message, notification } from 'antd';
import $ from 'jquery';
import EditLink from './EditLink.js';
import * as AjaxFunction from '../../../Util/AjaxFunction.js';

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.active = this.active.bind(this);
    this.abandon = this.abandon.bind(this);
    this.delete = this.delete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  active(departmentId) {
    console.log(departmentId);
    $.ajax({
      'type': 'POST',
      'url': AjaxFunction.DepartmentActive,
      'dataType': 'json',
      'data': {
        'id': departmentId,
      },
      'success': (data) => {
        if (data === 'Active Success') {
          openNotificationWithIcon('success', '激活成功', '激活成功，请进行后续操作');
        } else {
          openNotificationWithIcon('error', '激活失败', '无法进行激活操作，请刷新页面');
        }
      },
      'error': () => {
        openNotificationWithIcon('error', '请求错误', '无法完成修改操作，请检查网络情况');
      },
    });
  }
  abandon(DepartmentId) {
    message.success('点击了注销');
    $.ajax({
      'type': 'POST',
      'url': AjaxFunction.DepartmentAbandon,
      'dataType': 'json',
      'data': {
        'id': DepartmentId,
      },
      'success': (data) => {
        if (data === 'Active Success') {
          openNotificationWithIcon('success', '注销成功', '注销成功，请进行后续操作');
        } else {
          openNotificationWithIcon('error', '注销失败', '无法进行注销操作，请刷新页面');
        }
      },
      'error': () => {
        openNotificationWithIcon('error', '请求错误', '无法完成注销操作，请检查网络情况');
      },
    });
  }
  delete() {
    message.success('点击了删除');
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
        if (record.state === '激活') {
          return (
            <span>
              <a href="#">查看详情</a>
              <span className="ant-divider" />
              <EditLink
                departmentId={record.key}
                departmentName={record.name}
                departmentAddress={record.address}
                departmentPhone={record.phone}
                departmentState={record.state}
                departmentOther={record.other}
              />
              <span className="ant-divider" />
              <Popconfirm title="确定要注销这个部门吗？" onConfirm={this.abandon.bind(this, record.key)} onCancel={this.cancel}>
                <a href="#">注销：{record.name}</a>
              </Popconfirm>
              <span className="ant-divider" />
              <Popconfirm title="确定要删除这个部门吗？" onConfirm={this.delete} onCancel={this.cancel}>
                <a href="#">删除</a>
              </Popconfirm>
              <span className="ant-divider" />
            </span>
          );
        }
        return (
          <span>
            <a href="#">查看详情</a>
            <span className="ant-divider" />
            <EditLink
              departmentId={record.key}
              departmentName={record.name}
              departmentAddress={record.address}
              departmentPhone={record.phone}
              departmentState={record.state}
              departmentOther={record.other}
            />
            <span className="ant-divider" />
            <Popconfirm title="确定要激活这个部门吗？" onConfirm={this.active.bind(this, record.key)} onCancel={this.cancel}>
              <a href="#">激活：{record.name}</a>
            </Popconfirm>
            <span className="ant-divider" />
            <Popconfirm title="确定要删除这个部门吗？" onConfirm={this.delete} onCancel={this.cancel}>
              <a href="#">删除</a>
            </Popconfirm>
            <span className="ant-divider" />
          </span>
        );
      },
    }];
    const { tableData } = this.props;
    return (
      <Table
        rowKey={record => record.id}
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

import { Modal, Button, notification } from 'antd';
import React from 'react';
import AddForm from './AddForm';

const openNotificationWithIcon = (type, msg, desc) => {
  notification[type]({
    message: msg,
    description: desc,
  });
};

export default class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: '对话框的内容',
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    console.log(this.refs.AddForm.getFieldValue('departmentName'));
    this.refs.AddForm.validateFields((errors, values) => {
      if (!!errors) {
        openNotificationWithIcon('error', '录入错误', '录入的信息中有错误，请核实后再更新');
        return;
      }
      console.log(values);
      this.setState({
        visible: false,
        confirmLoading: false,
      });
      this.refs.AddForm.resetFields();
    });
  }

  handleCancel() {
    this.refs.AddForm.resetFields();
    this.setState({
      visible: false,
    });
  }

  handleReset() {
    this.refs.AddForm.resetFields();
  }


  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>新增部门</Button>
        <Modal
          maskClosable={false}
          title="新增部门"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>返 回</Button>,
            <Button key="reset" type="ghost" size="large" onClick={this.handleReset}>重 置</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>提 交</Button>,
          ]}
        >
          <AddForm ref="AddForm" />
        </Modal>
      </div>
    );
  }
}

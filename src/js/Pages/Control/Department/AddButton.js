import { Modal, Button } from 'antd';
import React from 'react';
import AddForm from './AddForm';
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
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    console.log(document.getElementById('departmentName').value);
    this.setState({
      ModalText: '对话框将在两秒后关闭',
      confirmLoading: false,
    });
  }

  handleCancel() {
    console.log(this.refs.AddForm.resetFields());
    this.setState({
      visible: false,
    });
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
        >
          <AddForm ref="AddForm" />
        </Modal>
      </div>
    );
  }
}

import { Modal, Button } from 'antd';
import $ from 'jquery';
import React from 'react';


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
    this.setState({
      ModalText: '对话框将在两秒后关闭',
      confirmLoading: true,
    });

  }

  handleCancel() {
    console.log('点击了取消');
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>新增部门</Button>
        <Modal title="对话框标题"
               visible={this.state.visible}
               onOk={this.handleOk}
               confirmLoading={this.state.confirmLoading}
               onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  }
}

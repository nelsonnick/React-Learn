import React from 'react';
import { Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class AddFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: '对话框的内容',
      visible: false,
    };
    this.departmentNameCheck = this.departmentNameCheck.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }
  resetForm(e) {
    e.preventDefault();
    this.props.form.resetFields();
  }
  departmentNameCheck(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      if (/^[\u4e00-\u9fa5]{0,}$/.test(value)) {
        callback();
      } else {
        callback(new Error('所输入内容不是汉字！'));
      }
    }
  }

  render() {
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const departmentNameProps = getFieldProps('departmentName', {
      rules: [
        { required: true, min: 3, message: '部门名称至少为 3 个汉字' },
        { validator: this.departmentNameCheck },
      ],
    });
    return (
      <Form horizontal>
        <FormItem
          label="部门名称"
          {...formItemLayout}
          hasFeedback
          required
          help={isFieldValidating('departmentName') ? '校验中...' : (getFieldError('departmentName') || []).join(', ')}
        >
          <Input id="departmentName" placeholder="请输入部门的中文全称" {...departmentNameProps} />
        </FormItem>
        <FormItem
          label="部门电话"
          {...formItemLayout}
          hasFeedback
          required
        >
          <Input id="departmentPhone" placeholder="请输入部门的8位固定电话" {...getFieldProps('departmentPhone')} />
        </FormItem>
        <FormItem
          label="部门地址"
          {...formItemLayout}
          hasFeedback
          required
        >
          <Input id="departmentAddress" placeholder="请输入详细地址" {...getFieldProps('departmentAddress')} />
        </FormItem>
        <FormItem
          label="部门状态"
          {...formItemLayout}
          required
        >
          <Select id="departmentState" size="large" defaultValue="1" {...getFieldProps('departmentState')} >
            <Option value="1">可用</Option>
            <Option value="0">不可用</Option>
          </Select>
        </FormItem>
        <FormItem
          label="其他信息"
          {...formItemLayout}
          hasFeedback
        >
          <Input type="textarea" id="departmentOther" rows="3" placeholder="其他需要填写的信息" {...getFieldProps('departmentOther')} />
        </FormItem>
      </Form>
    );
  }
}
AddFrom = Form.create({})(AddFrom);
export default AddFrom;
AddFrom.propTypes = {
  form: React.PropTypes.object,
};

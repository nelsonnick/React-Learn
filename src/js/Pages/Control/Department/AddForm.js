import React from 'react';
import { Form, Input, Select, Col } from 'antd';
import $ from 'jquery';
const FormItem = Form.Item;
const Option = Select.Option;
const InputGroup = Input.Group;
import * as AjaxFunction from '../../../Util/AjaxFunction.js';
class AddFrom extends React.Component {
  constructor(props) {
    super(props);
    this.departmentNameCheck = this.departmentNameCheck.bind(this);
  }

  departmentNameCheck(rule, value, callback) {
    if (!value) {
      callback();
    } else {
      $.ajax({
        'type': 'POST',
        'url': AjaxFunction.DepartmentName,
        'dataType': 'json',
        'data': { 'name': value },
        'success': (data) => {
          if (data === '正常') {
            callback();
          } else {
            callback(new Error(data));
          }
        },
        'error': () => {
          callback(new Error('无法执行后台验证，请重试'));
        },
      });
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
          help={isFieldValidating('departmentName') ? '校验中...' : (getFieldError('departmentName') || [])}
        >
          <Input id="departmentName" placeholder="请输入部门的中文全称" {...departmentNameProps} />
        </FormItem>
        <FormItem
          label="部门电话"
          {...formItemLayout}
          hasFeedback
          required
        >
          <InputGroup>
            <Col span="6">
              <Input id="departmentPhone1" defaultValue="0531" placeholder="2位或3位区号" />
            </Col>
            <Col span="4">
              <span>---</span>
            </Col>
            <Col span="16">
              <Input id="departmentPhone2" placeholder="7位或8位固定电话" />
            </Col>
          </InputGroup>
        </FormItem>
        <FormItem
          label="部门地址"
          {...formItemLayout}
          hasFeedback
          required
        >
          <Input id="departmentAddress" placeholder="请输入详细地址" />
        </FormItem>
        <FormItem
          label="部门状态"
          {...formItemLayout}
          required
        >
          <Select id="departmentState" size="large" defaultValue="1" >
            <Option value="1">激活</Option>
            <Option value="0">注销</Option>
          </Select>
        </FormItem>
        <FormItem
          label="其他信息"
          {...formItemLayout}
          hasFeedback
        >
          <Input type="textarea" id="departmentOther" rows="3" placeholder="其他需要填写的信息" />
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

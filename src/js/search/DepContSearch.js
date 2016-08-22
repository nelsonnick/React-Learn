import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class DepContSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem label="部门名称" >
          <Input placeholder="请输入部门名称" {...getFieldProps('depName')} />
        </FormItem>
        <Button type="primary" htmlType="submit">查找</Button>
      </Form>
    );
  }
}
DepContSearch = Form.create({})(DepContSearch);
export default DepContSearch;
DepContSearch.propTypes = {
  form: React.PropTypes.object,
};

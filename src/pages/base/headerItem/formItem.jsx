import React from 'react';
import { Form, Input, } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const FormItem = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
    
      <Form.Item
        label="请输入原密码："
        name="oldPassword"
        rules={[{ required: true, message: '请输入原密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="请输入新密码："
        name="newPassword"
        rules={[{ required: true, message: '请输入新密码!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="再次输入新密码："
        name="comfirePassword"
        rules={[{ required: true, message: '请再次输入密码!' }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  );
};


export default FormItem


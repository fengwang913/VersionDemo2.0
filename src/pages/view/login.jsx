import { Form, Input, Button } from 'antd';
import {  LockOutlined } from '@ant-design/icons';

import {createBrowserHistory} from "history";


let history = createBrowserHistory()

// import logo from '../../assets/img/logo.jpg'

const Login = () => {
    const onFinish = values => {
      if( values.password === '1234'){
          console.log('我可以登录了！')
          console.log('history',history)
          history.push(`/view`);
          history.go();
      }
    };
  

  return (
          <div style={{height:'100vh'}}>
          <div style={{ height:'50vh',backgroundColor:'#043D5D'}}>
              <div style={{color:'white', fontSize:'58px',paddingTop:'22vh',paddingLeft:'28vw'}}>
                 200N 设备配置系统
              </div>
              <div style={{color:'white', fontSize:'24px',paddingTop:'15px',paddingLeft:'24vw'}}>
                   北&nbsp;&nbsp;&nbsp;&nbsp;京&nbsp;&nbsp;&nbsp;&nbsp;龙&nbsp;&nbsp;&nbsp;&nbsp;鼎&nbsp;&nbsp;&nbsp;&nbsp;源&nbsp;&nbsp;&nbsp;&nbsp;科&nbsp;&nbsp;&nbsp;&nbsp;技&nbsp;&nbsp;&nbsp;&nbsp;股&nbsp;&nbsp;&nbsp;&nbsp;份&nbsp;&nbsp;&nbsp;&nbsp;有&nbsp;&nbsp;&nbsp;&nbsp;限&nbsp;&nbsp;&nbsp;&nbsp;公&nbsp;&nbsp;&nbsp;&nbsp;司
              </div>
          </div>
  
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{    
                width:'300px',
                height:'300px',
                paddingTop:'60px',
                marginLeft:'38vw',
        }}
            >
      {/* <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input 
            prefix={<UserOutlined style={{width:'100%'}} className="site-form-item-icon" />} 
            placeholder="Username" />
      </Form.Item> */}
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码!' }]}
        
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
          登录
        </Button>
      </Form.Item>
    </Form>
        

      </div>

  
  
  );
};

export default Login

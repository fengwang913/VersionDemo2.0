import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {createBrowserHistory} from "history";


let history = createBrowserHistory()

// import logo from '../../assets/img/logo.jpg'

const Login = () => {
    const onFinish = values => {
      if(values.username === '1234' && values.password === '1234'){
          console.log('我可以登录了！')
          console.log('history',history)
          history.push(`/view`);
          history.go();
      }
    };
  

  return (
          <div style={{height:'100vh'}}>
          <div style={{ height:'50vh',backgroundColor:'#043D5D'}}>
              <div style={{color:'white', fontSize:'58px',paddingTop:'30vh',paddingLeft:'22vw'}}>
                    北京龙鼎源科技股份有限公司
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
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名!' }]}
      >
        <Input 
            prefix={<UserOutlined style={{width:'100%'}} className="site-form-item-icon" />} 
            placeholder="Username" />
      </Form.Item>
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

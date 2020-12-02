import React  from 'react';
import { Layout, Menu, } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const {  Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderMenu extends React.Component {
  constructor(props){
      super(props)
      this.state ={
          
      }
   
  }

  render() {
    const collapsed  = this.props.collapsed;

    return (

        <Sider 
            trigger={null}
            collapsible 
            collapsedWidth = {0}
            collapsed={collapsed} 
            style={{backgroundColor:'white'}}
             >
          <div className="logo" />
          <Menu  
            defaultSelectedKeys={['1']} 
            mode="inline"
            >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <div style={{margin:'20px'}}>这是一个例子</div>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>

    );
  }
}


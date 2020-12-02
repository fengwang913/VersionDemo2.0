import React  from 'react';
import { Layout, Menu, } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  ContainerOutlined,
  MailOutlined,

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
    // console.log('this.props.openKeys',this.props.openKeys)

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
            defaultOpenKeys={this.props.openKeys}
            mode="inline"
            selectedKeys={this.props.leftMenuHighLight()}
            onClick={this.props._handleClick}
            onOpenChange = {this.props.onOpenChange}
            >
                <Menu.Item key="/" icon={<UserOutlined />} >HOME</Menu.Item>
                <Menu.Item key="log" icon={<DesktopOutlined />}>
                    Log
                </Menu.Item>
                <SubMenu  key="sub1" icon={<VideoCameraOutlined />} title="ModbusRTU-Master">
                    <Menu.Item key="Port1">Port1</Menu.Item>
                    <Menu.Item key="Port2">Port2</Menu.Item>
                    <Menu.Item key="Port3">Port3</Menu.Item>
                    <Menu.Item key="Port4">Port4</Menu.Item>
                    <Menu.Item key="Port5">Port5</Menu.Item>                
                </SubMenu >
                <Menu.Item key="ModbusTCP-Master" icon={<MailOutlined />}>
                    ModbusTCP-Master
                </Menu.Item>
                <SubMenu  key="sub2" icon={<UploadOutlined />} title="MQTT">
                    <Menu.Item key="broker1">Broker1</Menu.Item>
                    <Menu.Item key="broker2">Broker2</Menu.Item>
                </SubMenu >
                <Menu.Item key="devicerealtime" icon={<ContainerOutlined />}>
                    Device Realtime Status 
                </Menu.Item>
                <Menu.Item key="firmware" icon={<MailOutlined />}>Firmware upgrade</Menu.Item>
                <Menu.Item key="hardwareconfig" icon={<ContainerOutlined />}>
                Hardware config
                </Menu.Item>
          </Menu>
        </Sider>

    );
  }
}


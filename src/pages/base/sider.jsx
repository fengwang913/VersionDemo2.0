import React  from 'react';
import { Layout, Menu, } from 'antd';
import {
    DesktopOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    ContainerOutlined,
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,

} from '@ant-design/icons';

import  '../../assets/css/sider.css'

const {  Sider } = Layout;
const { SubMenu } = Menu;

const Demo = (props) => {
   
    return (
      <>
        <Menu
          style={{ width: 200 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1','sub2']}
          mode="inline"
          selectedKeys={props.props.leftMenuHighLight()}
          onClick={props.props._handleClick}
          onOpenChange = {props.props.onOpenChange}
        >
                <div style={{height:'16px',marginLeft:'6px',paddingTop:'6px',color:'#C0C0C0',marginTop:'4px'}}>Configuration</div>

                <SubMenu  key="sub1" icon={<DesktopOutlined />} title="Communication">
                    <Menu.Item key="/">Port</Menu.Item>
                        <SubMenu  key="sub2"  title="Protocol">
                            <Menu.Item key="ModbusRTU-master">ModbusRTU-Master</Menu.Item>
                            <Menu.Item key="ModbusTCP-Master">ModbusTCP-Master</Menu.Item>                
                            <Menu.Item key="mqtt">MQTT</Menu.Item>                
                        </SubMenu >                
                </SubMenu >
                <Menu.Item key="hardwareconfig" icon={<VideoCameraOutlined />}>
                    Hardware config
                </Menu.Item>
                <div style={{height:'16px',marginLeft:'6px',paddingTop:'6px',color:'#C0C0C0'}}>Information</div>
                <Menu.Item key="log" icon={<UploadOutlined />}>
                    Log
                </Menu.Item>
                <Menu.Item key="devicerealtime" icon={<CalendarOutlined />}>
                    Device Status 
                </Menu.Item>
                <Menu.Item key="proVariable" icon={<AppstoreOutlined />}>
                    Project Variables
                </Menu.Item>
                <Menu.Item key="modbusAdress" icon={<SettingOutlined />}>
                    Modbus Address Values
                </Menu.Item>
                <Menu.Item key="communication" icon={<LinkOutlined />}>
                    Communication Datagram
                </Menu.Item>
                <div style={{height:'16px',marginLeft:'6px',paddingTop:'6px',color:'#C0C0C0'}}>Upgrade</div>
                <Menu.Item key="firmware" icon={<MailOutlined />}>Firmware upgrade</Menu.Item>
                <Menu.Item key="project" icon={<UserOutlined />}>Project</Menu.Item>
          
        </Menu>
      </>
    );
  };

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
            style={{backgroundColor:'white',width:'300px'}}
            className={'sty1'}
             >
          <div className="logo" />
          <Demo props={this.props}/>
         </Sider>

    );
  }
}


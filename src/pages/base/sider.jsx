import React  from 'react';
import { Layout, Menu, } from 'antd';
import {
    DesktopOutlined,
    // UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    // ContainerOutlined,
    // MailOutlined,
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
          style={{ width: 250 }}
          defaultSelectedKeys={["view/port"]}
          defaultOpenKeys={['sub1','sub2','sub3','sub4']}
          mode="inline"
          selectedKeys={props.props.leftMenuHighLight()}
          onClick={props.props._handleClick}
          onOpenChange = {props.props.onOpenChange}
        >
                <div 
                    style={{height:'16px',
                            marginLeft:'6px',
                            paddingTop:'6px',
                            color:'#C0C0C0',
                            marginTop:'4px',}}>Configuration</div>
                <SubMenu  key="sub1" icon={<DesktopOutlined />} title="Communication">
                    <Menu.Item key="view/port">Device</Menu.Item>
                    <SubMenu  key="sub2"  title="Protocol">
                            <Menu.Item key="view/ModbusRTU-master">ModbusRTU-Master</Menu.Item>
                            <Menu.Item key="view/ModbusTCP-Master">ModbusTCP-Client</Menu.Item>                
                            <Menu.Item key="view/mqtt">MQTT</Menu.Item>                
                    </SubMenu >                
                </SubMenu >

                <Menu.Item key="view/hardwareconfig" icon={<VideoCameraOutlined />}>
                    IO Module
                </Menu.Item>
                
                <SubMenu  key="sub3" icon={<DesktopOutlined />} title="System">
                    <SubMenu  key="sub4"  title="Upgrade">
                        <Menu.Item key="view/firmware" >Firmware upgrade</Menu.Item>
                        <Menu.Item key="view/project" >Project</Menu.Item>              
                    </SubMenu > 

                    {/* <Menu.Item key="view/ntp">Data&Time</Menu.Item> */}
                    <Menu.Item key="view/general">Data & Time</Menu.Item>                
               
                </SubMenu >
   
                <div 
                    style={{height:'16px',
                        marginLeft:'6px',
                        paddingTop:'6px',
                        color:'#C0C0C0'}}>Information</div>
                <Menu.Item key="view/log" icon={<UploadOutlined />}>
                    Log
                </Menu.Item>
                <Menu.Item key="view/devicerealtime" icon={<CalendarOutlined />}>
                    IO Point Status 
                </Menu.Item>
                {/* <Menu.Item key="view/proVariable" icon={<AppstoreOutlined />}>
                    Project Variables
                </Menu.Item> */}
                <Menu.Item key="view/modbusAdress" icon={<SettingOutlined />}>
                   Data
                </Menu.Item>
                <Menu.Item key="view/communication" icon={<LinkOutlined />}>
                    Communication Datagram
                </Menu.Item>  
{/* 
                <div 
                    style={{height:'16px',
                        marginLeft:'6px',
                        paddingTop:'6px',
                        color:'#C0C0C0'}}>Upgrade</div>
                <Menu.Item key="view/firmware" icon={<MailOutlined />}>Firmware upgrade</Menu.Item>
                <Menu.Item key="view/project" icon={<UserOutlined />}>Project</Menu.Item> */}
                
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
             >
          <div className="logo" />
          <Demo props={this.props}/>
         </Sider>
    );
  }
}


import React,{ Component }  from 'react';
import { Menu, Dropdown  } from 'antd';
import { UserOutlined  } from '@ant-design/icons';
import {createBrowserHistory} from "history";

import Access from './access'
import { Modal } from 'antd';
import Language from './language';
// import Reset from './reset'
// import  '../../../assets/css/header.css'



let history = createBrowserHistory()


export default class Item extends Component{
    constructor(props){
        super(props)
        this.state = {

            showAccess: false,
            // resetFlag:false,
            languageFlag:false,
            loading: false,
          };
        
    }
    handleMenuClick = e => {
        console.log('e.key',e.key)
        if(e.key === 'logout'){
            history.push(`/`);
            history.go();   
        }
        if(e.key === 'access'){
            this.setState({ showAccess:true });
        }
        if(e.key === 'language'){
            this.setState({ languageFlag:true });
        }
        if(e.key === 'reset'){
            Modal.warning({
                title: '警告',
                content: '确定重置？',
            });


        }
      };

      showAccesss2Visible = (modal2Visible) => {
        console.log('wo bei dian ji le',modal2Visible,)
        this.setState({ showAccess:false });
      }
      language2Visible = () => {
        console.log('wo bei dian ji le')
        this.setState({ languageFlag:false });
      }

      resetOk = () => {
          this.setState({
              resetFlag:false,
              loading:true
          })
      }

      onChange = (value) => {
        console.log(`selected ${value}`);
      }
      
      onBlur = () => {
        console.log('blur');
      }
      
      onFocus =() => {
        console.log('focus');
      }
      
      onSearch = (val) => {
        console.log('search:', val);
      }
      

    
    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
              <Menu.Item key='logout'>
                  登出
              </Menu.Item>
              <Menu.Item key='access'>
                  修改密码
              </Menu.Item>
              <Menu.Item key='language'>
                  语言
              </Menu.Item>
              <Menu.Item key='reset'>
                  恢复出厂设置
              </Menu.Item>
            </Menu>
          );

        return(
            <div  style={{fontSize:'20px',marginTop:'20px',paddingRight:'20px'}}>             
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" style={{color:'white'}} onClick={e => e.preventDefault()} >
                        <UserOutlined />
                    </a>
                </Dropdown>
                <Language languageFlag={this.state.languageFlag}
                          language2Visible={this.language2Visible}
                          onChange={this.onChange} 
                          onBlur={this.onBlur}
                          onFocus={this.onFocus}
                          onSearch={this.onSearch}/>
                <Access 
                    showAccess = {this.state.showAccess} 
                    showAccesss2Visible={this.showAccesss2Visible}/>
                {/* <Reset
                    resetFlag = {this.state.resetFlag}
                    resetFlag2Visible ={this.resetFlag2Visible}
                    resetOk = {this.resetOk}/> */}
            </div>
        )
    } 
}

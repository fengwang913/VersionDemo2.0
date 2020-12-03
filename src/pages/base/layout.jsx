import React  from 'react';

import SiderMenu from './sider'
import Cont from './cont'
import Header from './header'

import { Layout, } from 'antd';
import {createBrowserHistory} from "history";


let history = createBrowserHistory()


export default class MainLayout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
            openKeys:['sub1','sub2'],
          };
         
    }
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
 
      };
      _handleClick = (e) => {

        if(e.key === '/'){
            history.push(`/`);
            history.go();
        }else{
            history.push(`/${e.key}`);
            history.go();
    
        }
      }
      leftMenuHighLight = () => {

        const { pathname } = history.location
        let selectedKeys = [pathname.replace('/', '')]
        if (pathname === '/' ) {
            selectedKeys = ['/']
          }
        return selectedKeys
      }
      
      onOpenChange = (Keys) =>{
       
        console.log('我此时此刻的变化',Keys)

      }

    

  render() {
    return (
       <div>
           <Header toggle={this.toggle}/>
           <Layout style={{ minHeight: '93vh' }}>
                <SiderMenu  collapsed={this.state.collapsed}  
                            _handleClick={this._handleClick} 
                            leftMenuHighLight={this.leftMenuHighLight}
                            onOpenChange={this.onOpenChange}
                            openKeys={this.state.openKeys}
                            />
                <Cont  />
           </Layout>
       </div>
      
    );
  }
}


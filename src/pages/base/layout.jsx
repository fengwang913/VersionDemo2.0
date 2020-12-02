import React  from 'react';

import SiderMenu from './sider'
import Cont from './cont'
import Header from './header'

import { Layout, } from 'antd';


export default class MainLayout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
          };
    }
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
 
      };
    

  render() {
    return (
       <div>
           <Header toggle={this.toggle}/>
           <Layout style={{ minHeight: '93vh' }}>
                <SiderMenu  collapsed={this.state.collapsed}/>
                <Cont />
           </Layout>
       </div>
      
    );
  }
}


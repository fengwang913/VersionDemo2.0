import React  from 'react';

import { Layout, } from 'antd';

import View from '../view/view'
import  '../../assets/css/scroll.css' 


const {  Content } = Layout;

export default class Cont extends React.Component {

  render() {
    return (
        
        <Layout className="site-layout">
          
          <Content className="innerbox" style={{ padding:'0px 24px' ,maxHeight:'90vh',overflowY:'auto'  }}>
              <View/>
          </Content>
        </Layout>

    );
  }
}


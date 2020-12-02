import React  from 'react';

import { Layout, } from 'antd';

import View from '../view/view'


const {  Content } = Layout;

export default class Cont extends React.Component {

  render() {
    return (
        
        <Layout className="site-layout">
          
          <Content style={{ margin: '0px 24px' }}>
              <View />
          </Content>
        </Layout>

    );
  }
}


import React  from 'react';

import { Layout, } from 'antd';


const {  Content } = Layout;


export default class Cont extends React.Component {

  render() {
    return (
        
        <Layout className="site-layout">
          
          <Content style={{ margin: '0 16px' }}>
    
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>

    );
  }
}


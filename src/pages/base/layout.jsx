import React  from 'react';

import SiderMenu from './sider'
import Cont from './cont'
import { Layout, } from 'antd';


export default class MainLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '94vh' }}>
        <SiderMenu />
        <Cont />
      </Layout>
    );
  }
}


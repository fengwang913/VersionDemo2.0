import React,{ Component }  from 'react';
import { Tabs } from 'antd';

import Publish from '../publish/publish'
import Subscript from '../subscript/subscript'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Broker = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="发布参数" key="1">
      <Publish />
    </TabPane>

    <TabPane tab="订阅参数" key="2">
      <Subscript />
    </TabPane>
  </Tabs>
);

export default Broker;
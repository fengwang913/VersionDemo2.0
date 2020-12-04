import React,{ Component }  from 'react';
import { Tabs } from 'antd';

import Port01 from './port01';
import Port02 from './port02';
import Port03 from './port03';
import Port04 from './port04';
import Port05 from './port05';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Select = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="串口 1" key="1">
      <Port01 />
    </TabPane>
    <TabPane tab="串口 2" key="2">
      <Port02 />
    </TabPane>
    <TabPane tab="串口 3" key="3">
      <Port03 />
    </TabPane>
    <TabPane tab="串口 4" key="4">
      <Port04 />
    </TabPane>
    <TabPane tab="串口 5" key="5">
      <Port05 />
    </TabPane>
  </Tabs>
);




export default class TabSelect extends Component{
    render(){

        return(
            <div>
              <Select />
            </div>
        )
    }

    
}
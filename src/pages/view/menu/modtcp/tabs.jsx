import React  from 'react';
import { Tabs } from 'antd';

import NetWork01 from './network1';
import NetWork02 from './network2';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Select = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="网口 1" key="1">
      <NetWork01 />
    </TabPane>
    <TabPane tab="网口 2" key="2">
      <NetWork02 />
    </TabPane>
  </Tabs>
);




export default class NetSelect extends Component{
    render(){

        return(
            <div>
              <Select />
            </div>
        )
    }

    
}
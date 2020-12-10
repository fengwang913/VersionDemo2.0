import React,{ Component }  from 'react';

// import NetSelect from './tabs'
import NetWork01 from './network1';
import { Select  } from 'antd';

const { Option } = Select;


export default class ModTCP extends Component{
    render(){

        return(
            <div style={{ marginTop:'20px',overflowX:'auto'}}>
                <div style={{fontSize:'20px'}} >
                   ModTCP-Master
                   <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                   连接超时:
                    <Select defaultValue="33" style={{ width: 100,marginLeft:'10px',marginRight:'10px' }} >
                        <Option value="33">33ms</Option>
                        <Option value="23">23ms</Option>
                        <Option value="13">13ms</Option>
                        <Option value="43">43ms</Option>
                    </Select>
                    响应超时:
                    <Select defaultValue="33" style={{ width: 100,marginLeft:'10px' }} >
                        <Option value="33">1000ms</Option>
                        <Option value="23">2000ms</Option>
                    </Select>
                </div>
                </div>
                <NetWork01 />
            </div>
            
        )
    }

    
}
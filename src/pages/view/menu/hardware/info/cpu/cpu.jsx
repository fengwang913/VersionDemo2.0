import React,{ Component }  from 'react';
import CpuTab from './cpuTab'
import { Select,Button  } from 'antd';


import AiTable from './aiTab'
import DoTable from './doTab'




const { Option } = Select;

export default class Cpu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const info = this.props.info
        console.log('我现在的ingo是多少？？？？？？',info)
        const diInfo = info.slice(0,12)
        const doInfo = info.slice(12,16)
        const aiInfo = info.slice(16,22)
        console.log("我们三个是多少呢",diInfo,doInfo,aiInfo)



        return(
            <div style={{margin:'10px',paddingBottom:'10px'}}>
                <div style={{fontSize:'22px'}}>
                    CPU配置信息
                </div>
                <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                    <span>
                        DI滤波次数:
                        <Select defaultValue="8" style={{ width: 100,marginLeft:'10px',marginRight:'10px' }} >
                            <Option value="8">8</Option>
                            <Option value="16">16</Option>
                            <Option value="32">32</Option>
                        </Select>
                    </span>
                    {/* <span>
                        AI滤波时间:
                        <Select defaultValue="33" style={{ width: 100,marginLeft:'10px' }} >
                            <Option value="33">33ms</Option>
                            <Option value="23">23ms</Option>
                            <Option value="13">13ms</Option>
                            <Option value="43">43ms</Option>
                        </Select>
                        <Button style={{ marginLeft:'10px' }}>保存</Button>
                    </span> */}
                </div>
                <div>
                    <div style={{fontSize:'20px'}}>
                        DI
                    </div>
                    <CpuTab info={diInfo}/>
                </div>
                <div style={{marginTop:'20px'}}>
                    <div style={{fontSize:'20px'}}>
                        DO
                    </div>
                    <DoTable info={doInfo} style={{marginTop:'200px'}}/>
                </div>
                <div style={{marginTop:'20px'}}>
                    <div style={{fontSize:'20px'}}>
                       AI
                    </div>
                    <AiTable info={aiInfo}/>
                </div>
               
            </div>
        )
    }

    
}

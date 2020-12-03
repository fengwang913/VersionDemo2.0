import React,{ Component }  from 'react';
import { Select,Button  } from 'antd';
import AoTab from './aoTab'

const { Option } = Select;
export default class Ao extends Component{
    constructor(props){
        super(props)
        console.log('现在的ao里面是什么呢？',props.info)
    }

    render(){
        const info = this.props.info
        console.log('我是aoaoaoaoaooaoaoao',info)
        return(
            <div style={{margin:'10px'}}>
                <div style={{fontSize:'22px',marginBottom:'20px'}}>
                    AO配置信息
                </div>
                {/* <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                滤波时间:
                    <Select defaultValue="33" style={{ width: 100,marginLeft:'10px' }} >
                        <Option value="33">33ms</Option>
                        <Option value="23">23ms</Option>
                        <Option value="13">13ms</Option>
                        <Option value="43">43ms</Option>
                    </Select>
                    <Button style={{ marginLeft:'10px' }}>保存</Button>

                </div>
                */}
                
               <AoTab info={info}/>
            </div>
        )
    }

    
}

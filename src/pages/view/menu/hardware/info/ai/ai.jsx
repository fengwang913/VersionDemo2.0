import React,{ Component }  from 'react';
import { Select  } from 'antd';
import AiTab from './aiTab'

const { Option } = Select;
export default class Ai extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const info = this.props.info
 

        return(
            <div style={{margin:'10px'}}>
                <div style={{fontSize:'22px',marginBottom:'20px'}}>
                    AI配置信息
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

                </div> */}

               <AiTab info={info} />
            </div>
        )
    }

    
}
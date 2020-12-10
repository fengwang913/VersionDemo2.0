import React,{ Component }  from 'react';
import EditableTable from './tables';
import { Select  } from 'antd';

const { Option } = Select;


export default class Port01 extends Component{
  constructor(props){
    super(props)

    this.state = {
        originData:[{
        key:'01',
        index:'1',
        slaveId:'12',
        funcCode:'Read Coils',
        Addre:'24',
        mappinAddre:'1',
        statusAddre:'234',
        number:'12',
        circle:'3',
       
      
    },{
      key:'02',
      index:'2',
      slaveId:'12',
      funcCode:'Read Discreate Inputs',
      Addre:'56',
      mappinAddre:'6',
      statusAddre:'12',
      number:'12',
      circle:'3',
  },
  {
      key:'03',
      index:'3',
      slaveId:'12',
      funcCode:'Read Holding Registers',
      Addre:'56',
      mappinAddre:'6',
      statusAddre:'12',
      number:'12',
      circle:'3',     
  },
  {
      key:'04',
      index:'4',
      slaveId:'12',
      funcCode:'Read Input Registers',
      Addre:'56',
      mappinAddre:'6',
      statusAddre:'12',
      number:'12',
      circle:'3',
  },{
        key:'05',
        index:'5',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    
    },
    {
        key:'06',
        index:'6',
        slaveId:'12',
        funcCode:'Read Input Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },{
        key:'07',
        index:'1',
        slaveId:'12',
        funcCode:'Read Coils',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },{
        key:'08',
        index:'2',
        slaveId:'12',
        funcCode:'Read Discreate Inputs',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
   
    },
    {
        key:'09',
        index:'3',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },
    {
        key:'10',
        index:'4',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },{
        key:'11',
        index:'5',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },
    {
        key:'12',
        index:'6',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },{
        key:'13',
        index:'5',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },
    {
        key:'14',
        index:'6',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
    },{
        key:'15',
        index:'5',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
        },
        {
        key:'16',
        index:'6',
        slaveId:'12',
        funcCode:'Read Holding Registers',
        Addre:'56',
        mappinAddre:'6',
        statusAddre:'12',
        number:'12',
        circle:'3',
        }]}
}

  render(){

      return(
          <div>
              <div style={{fontSize:'20px'}} >
                  串口 1
                  <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                  轮询延迟:
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
                        <Option value="13">13ms</Option>
                        <Option value="43">43ms</Option>
                    </Select>
                </div>
              </div>
              <EditableTable originData={this.state.originData} />
          </div>
      )
  }  
}


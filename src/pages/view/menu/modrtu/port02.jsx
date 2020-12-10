import React,{ Component }  from 'react';
import EditableTable from './tables'
import { Select  } from 'antd';

const { Option } = Select;


export default class Port02 extends Component{
    constructor(props){
        super(props)

        this.state = {
            originData:[{
            key:'01',
            index:'1',
            funcCode:'Read Coils',
            slaveId:'12',
            Addre:'56',
            mappinAddre:'6',
            statusAddre:'12',
            number:'12',
            circle:'3',
          
        },{
          key:'02',
          index:'2',
          funcCode:'Read Discreate Inputs',
          slaveId:'12',
          Addre:'56',
          mappinAddre:'6',
          statusAddre:'12',
          number:'12',
          circle:'3',
      },
      {
          key:'03',
          index:'3',
          funcCode:'Read Holding Registers',
          slaveId:'12',
          Addre:'56',
          mappinAddre:'6',
          statusAddre:'12',
          number:'12',
          circle:'3',
        },
      {
          key:'04',
          index:'4',
          funcCode:'Read Input Registers',
          slaveId:'12',
          Addre:'56',
          mappinAddre:'6',
          statusAddre:'12',
          number:'12',
          circle:'3',
      },{
          key:'05',
          index:'5',
          funcCode:'Write Coil',
          slaveId:'12',
          Addre:'56',
          mappinAddre:'6',
          statusAddre:'12',
          number:'12',
          circle:'3',
      },{
        key:'06',
        index:'6',
        funcCode:'Write Coil',
        slaveId:'12',
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
                  串口 2
                  <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                    响应超时:
                    <Select defaultValue="33" style={{ width: 100,marginLeft:'10px' }} >
                        <Option value="33">1000ms</Option>
                        <Option value="23">2000ms</Option>
                    </Select>
                </div>
              </div>
              <EditableTable  originData={this.state.originData}/>
          </div>
      )
  }

}

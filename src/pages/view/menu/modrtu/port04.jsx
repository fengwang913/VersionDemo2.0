import React,{ Component }  from 'react';
import EditableTable from './tables'
import { Select  } from 'antd';

const { Option } = Select;

export default class Port04 extends Component{
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
            timeout:'200ms',

          
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
            timeout:'200ms',

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
            timeout:'200ms',

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
            timeout:'200ms',

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
            timeout:'200ms',

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
            timeout:'200ms',

    },{
            key:'07',
            index:'7',
            funcCode:'Write Coil',
            slaveId:'12',
            Addre:'56',
            mappinAddre:'6',
            statusAddre:'12',
            number:'12',
            circle:'3',
            timeout:'200ms',

    },{
            key:'08',
            index:'8',
            funcCode:'Write Coil',
            slaveId:'12',
            Addre:'56',
            mappinAddre:'6',
            statusAddre:'12',
            number:'12',
            circle:'3',
            timeout:'200ms',

    },{
            key:'09',
            index:'9',
            funcCode:'Write Coil',
            slaveId:'12',
            Addre:'56',
            mappinAddre:'6',
            statusAddre:'12',
            number:'12',
            circle:'3',
            timeout:'200ms',

    },],
    showExp:'none',}
    }
    alertClick = () => {

        let currentShow = this.state.showExp
        let showExp = ''
  
        if(currentShow === 'none'){
          showExp = 'inline'
        }if(currentShow === 'inline'){
          showExp = 'none'
        }
        this.setState({showExp:showExp})
    }
  render(){
    let showExp = this.state.showExp

      return(
          <div>
              <div style={{fontSize:'20px'}} >
                  串口 4
                  <div style={{fontSize:'16px',margin:'10px',float:'right'}}>
                  <span  
                        onClick={this.alertClick}
                        style={{marginLeft :'10px',cursor:'pointer'}}>
                    静默时间:
                    </span>
                    <Select defaultValue="1" style={{ width: 100,marginLeft:'10px' }} >
                        <Option value="1">1ms</Option>
                        <Option value="2">2ms</Option>
                    </Select>
                </div>
              </div>
              <EditableTable  originData={this.state.originData}/>
              <div style={{display:showExp ,fontSize:'18px'}}>
                  这里是有关静默时间的解释
              </div>
          </div>
      )
  }

  
}
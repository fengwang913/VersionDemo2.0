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
                slaveId:'12',
                funcCode:'Read Coils',
                Addre:'24',
                mappinAddre:'1',
                statusAddre:'234',
                number:'12',
                circle:'3',
                timeout:'200ms',

               
              
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
              timeout:'200ms',

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
              timeout:'200ms',

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
              timeout:'200ms',

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
                timeout:'200ms',

            
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
           
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
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
                timeout:'200ms',
                }],
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
                  串口 2
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

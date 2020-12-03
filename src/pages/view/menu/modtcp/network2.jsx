import React,{ Component }  from 'react';

import EditableTable from './table'


export default class NetWork02 extends Component{
  constructor(props){
    super(props)
    this.state = {
      originData:[{
        key:'01',
        index:'1',
        IP:'1111',
        port:'1',
        slaveId:'123',
        funcCode:'Read Coils',
        Addre:'24',
        mappinAddre:'1',
        number:'19200',
        timeout:'320'
      
    },{
      key:'02',
      index:'2',
      IP:'1111',
      port:'1',
      slaveId:'123',
      funcCode:'Read Coils',
      Addre:'24',
      mappinAddre:'1',
      number:'19200',
      timeout:'320'
    },]
    }
  }
    render(){

        return(
            <EditableTable originData={this.state.originData} />
           
        )
    }

    
}
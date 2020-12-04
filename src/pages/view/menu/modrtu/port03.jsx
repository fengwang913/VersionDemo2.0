import React,{ Component }  from 'react';
import EditableTable from './tables'





export default class Port03 extends Component{
    constructor(props){
        super(props)

        this.state = {
            originData:[{
            key:'01',
            index:'1',
            funcCode:'Read Coils',
            Addre:'24',
            mappinAddre:'1',
            number:'19200',
          
        },{
          key:'02',
          index:'2',
          funcCode:'Read Discreate Inputs',
          Addre:'56',
          mappinAddre:'1',
          number:'19200',
      },
      {
          key:'03',
          index:'3',
          funcCode:'Read Holding Registers',
          Addre:'23',
          mappinAddre:'1',
          number:'19200',
      },
      {
          key:'04',
          index:'4',
          funcCode:'Read Input Registers',
          Addre:'98',
          mappinAddre:'1',
          number:'19200',
      },{
          key:'05',
          index:'5',
          funcCode:'Write Coil',
          Addre:'200',
          mappinAddre:'1',
          number:'19200',
      },
      {
        key:'06',
        index:'6',
        funcCode:'Write Coil',
        Addre:'200',
        mappinAddre:'1',
        number:'19200',
    },
    {
        key:'07',
        index:'7',
        funcCode:'Write Coil',
        Addre:'200',
        mappinAddre:'1',
        number:'19200',
    }]}
    }
  render(){

      return(
          <div>
              <div style={{fontSize:'20px'}} >
                  串口 3
              </div>
              <EditableTable originData={this.state.originData}  />
          </div>
      )
  }

  
}
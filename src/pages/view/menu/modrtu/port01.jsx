import React,{ Component }  from 'react';
// import EditableTable from './tables';

import RtuTable from './editTable';




export default class Port01 extends Component{
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

    }],
        showExp:'none',
    }
}

handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };
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
      return(
          <div>
              <div style={{fontSize:'20px'}} >
                  串口 1
              </div>
              {/* <EditableTable originData={this.state.originData} /> */}
              <RtuTable originData={this.state.originData} 
                        handleDelete={this.handleDelete}
                        handleAdd={this.handleAdd}
                        handleSave={this.handleSave}
                        alertClick={this.alertClick}
                        showExp={this.state.showExp}/> 
          </div>
      )
  }  
}


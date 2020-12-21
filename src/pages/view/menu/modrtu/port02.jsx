import React,{ Component }  from 'react';
import RtuTable from './editTable';


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
                  串口 2
              </div>
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

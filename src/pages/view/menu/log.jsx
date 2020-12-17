import React,{ Component }  from 'react';
import { List, DatePicker,Button   } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const data = [
  {
    index:'1',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'2',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'3',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'4',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },{
    index:'5',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'6',
    title: '2020-11-21',
    desc:'这是一条消息记录。'
  },
  {
    index:'7',
    title: '2020-11-21',
    desc:'这是一条消息记录。'
  },
  {
    index:'8',
    title: '2020-11-21',
    desc:'这是一条消息记录。'
  },  {
    index:'9',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'10',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'11',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'12',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },{
    index:'13',
    title: '2020-11-20',
    desc:'这是一条消息记录。'
  },
  {
    index:'14',
    title: '2020-11-21',
    desc:'这是一条消息记录。'
  },
  {
    index:'15',
    title: '2020-11-21',
    desc:'这是一条消息记录。'
  },
  {
    index:'16',
    title: '2020-11-21',
    desc:'这是一条消息记录。'
  }
];



export default class Log extends Component{
    render(){

        return(
            <div style={{marginTop:'10px',height:'83vh',marginBottom:'20px'}}>
              <div style={{height:'50px'}}>
                <div style={{float:'right',zIndex:1}} >
                  <RangePicker style={{zIndex:1}} />
                  <Button
                      type="primary"
                      style={{zIndex:2}}
                      onClick={()=>{console.log('111')}}
                      icon={<SearchOutlined />
                      }
                    />
                </div>
              </div>  

              <div style={{backgroundColor:'white',paddingLeft:'10px',marginBottom:'10px'}} >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                        description={item.desc}
                      />
                    </List.Item>
                  )}
                />
              </div>
           
            </div>
        )
    }

    
}
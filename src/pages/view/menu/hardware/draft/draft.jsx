import React,{ Component }  from 'react';
import { Button,Space } from 'antd';
import Display from './display';



export default class Draft extends Component{
    constructor(props){
        super(props)
        console.log('此时btn里面的props',props)
       
    }
  
    render(){
        return(
            <div>
                <div>
                    <Space style={{marginLeft:'10px',marginTop:'5px'}}>
                        <Button onClick ={this.props.uploadList} >上传</Button>
                        {/* <Button onClick ={this.props.changeList} >AI</Button>
                        <Button onClick ={this.props.changeList} >AO</Button>
                        <Button danger onClick ={this.props.changeList}>移除最后一项</Button>
                        <Button danger onClick ={this.props.changeList}>清空</Button> */}
                    </Space>
                </div>
                <div style={{Display:'flex'}}>
                    <Display list={this.props.list} info={this.props.info} selectImg={this.props.selectImg}/>

                </div>      
            </div>
              
        )
    }

    
}




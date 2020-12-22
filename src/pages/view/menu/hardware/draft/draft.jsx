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
                        <Button onClick ={this.props.uploadList} >刷新</Button>
                    </Space>
                </div>
                <div style={{Display:'flex'}}>
                    <Display list={this.props.list} info={this.props.info} selectImg={this.props.selectImg}/>

                </div>      
            </div>
              
        )
    }

    
}



